import './App.css';
import StartMenu from './components/StartMenu';
import Header from './components/Header';
import Map from './components/Map';
import { useState } from 'react';
import { getDownloadURL, ref } from 'firebase/storage';
import { getDocs, query, where, collection } from 'firebase/firestore';
import {db, storage} from './utils/firebase';

import {claptrap, masterchief, spock} from './images/index.js';

function App() {
  const [showLevelSelect, setShowLevelSelect] = useState(true);
  const [currentLevel, setCurrentLevel] = useState({name: '', imageURL: ''});
  //X and Y Coordinates for center of the targeting box
  const [pageX, setPageX] = useState(0);
  const [pageY, setPageY] = useState(0);
  const [showTargetBox, setShowTargetBox] = useState(false);
  const [showKey, setShowKey] = useState(false);
  //Mock data for the characters array
  const [characters, setCharacters] = useState([]);
  // const [startTime, setStartTime] = useState(0);

  const updateCoords = (e) => {
    setPageX(((e.nativeEvent.offsetX / document.querySelector('.map').clientWidth) * 100).toFixed(2));
    setPageY(((e.nativeEvent.offsetY / document.querySelector('.map').clientHeight) * 100).toFixed(2));
    setShowTargetBox(!showTargetBox);
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
    const q = query(collection(db, 'characters'), where('level', '==', name));
    const charArray = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(doc => charArray.push({...doc.data(), found: false, id: doc.id}));
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
      />}
    </div>
  );
}

export default App;
