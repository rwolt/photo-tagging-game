import './App.css';
import StartMenu from './components/StartMenu';
import Header from './components/Header';
import Map from './components/Map';
import { useEffect, useState } from 'react';
import { getDownloadURL, ref } from 'firebase/storage';
import { getDocs, query, where, collection } from 'firebase/firestore';
import {db, storage} from './utils/firebase';

function App() {
  const [showLevelSelect, setShowLevelSelect] = useState(true);
  const [currentLevel, setCurrentLevel] = useState({name: '', imageURL: ''});
  //X and Y Coordinates for center of the targeting box
  const [pageX, setPageX] = useState(0);
  const [pageY, setPageY] = useState(0);
  const [showTargetBox, setShowTargetBox] = useState(false);
  const [showCharacterTargets, setShowCharacterTargets] = useState(false);
  const [showKey, setShowKey] = useState(false);
  //Mock data for the characters array
  const [currentCharacter, setCurrentCharacter] = useState('');
  const [characterTarget, setCharacterTarget] = useState({});
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    //If there a character is currently being validated, show or hide the character target divs 
    if(currentCharacter !== '') {
      setShowCharacterTargets(true);
    } else {
      setShowCharacterTargets(false);
    }
  }, [currentCharacter])
  
  useEffect(() => {
    if(showCharacterTargets === true) {
      //Get the bounding rectangle of the selection box and the character box
      const targetBox = document.querySelector('.target-box').getBoundingClientRect();
      console.log(currentCharacter);
      const charTarget = document.getElementById(`${currentCharacter} target`).getBoundingClientRect();
      //Check to see if the two divs overlap
      console.log(checkOverlap(targetBox, charTarget));
      //Set the current character to an empty string to hide the character targets
      setCurrentCharacter('');
    }
  }, [showCharacterTargets])

  const updateCoords = (e) => {
    setPageX(((e.nativeEvent.offsetX / document.querySelector('.map').clientWidth) * 100).toFixed(2));
    setPageY(((e.nativeEvent.offsetY / document.querySelector('.map').clientHeight) * 100).toFixed(2));
    setShowTargetBox(!showTargetBox);
  }
  
  const handleSelect = (e) => {
    const {id} = e.currentTarget;  
    setCurrentCharacter(id);
  }

  const checkOverlap = (rect1, rect2) => {
    const overlap = !(rect1.left > rect2.right ||
                      rect1.right < rect2.left ||
                      rect1.bottom < rect2.top ||
                      rect1.top > rect2.bottom);
    return overlap;
  }
 
  const getLevel = async (e) => {
    const {id} = e.target;
    //Close the start menu on level select
    getCharacters(id);
    setShowLevelSelect(!showLevelSelect);
    //Mock for retreiving map from the server
    setCurrentLevel({name: id});
    getLevelImage(id);
  }
  
  const getLevelImage = (name) => {
    //Fetch the level map from firebase cloud storage
    const levelImage = ref(storage, `levels/${name}.png`);
    getDownloadURL(levelImage).then(url =>{
      setCurrentLevel({...currentLevel, imageURL: url});
    });
  }

  const getCharacters = async (name) => {
    //Fetch character docs for the current level from firebase
    const q = query(collection(db, 'characters'), where('level', '==', name));
    const charArray = [];
    const querySnapshot = await getDocs(q);
    //Map over the returned docs and add a found and id property
    querySnapshot.forEach(doc => charArray.push({...doc.data(), found: false, id: doc.id}));
    //Get the download url for each characters avatar from cloud storage
    charArray.forEach(char => {
      const imageRef = ref(storage, char.imageURL);
      getDownloadURL(imageRef).then(url => {
        char.imageURL = url;
    });
    setCharacters(charArray);
    });
  }
 
    return(
    //Show the start menu if levelSelect is true
    <div className="App">
      <Header 
        pageX={pageX} 
        pageY={pageY}
        showKey={showKey}
        setShowKey={setShowKey}
        characters={characters}
      />
      {showLevelSelect ? 
        <StartMenu
          getLevel={getLevel}
        /> : 
      <Map 
        level={currentLevel}
        characters={characters}
        updateCoords={updateCoords}
        pageX={pageX}
        pageY={pageY}
        showTargetBox={showTargetBox}
        showCharacterTargets={showCharacterTargets}
        handleSelect={handleSelect}
      />}
    </div>
  );
}

export default App;
