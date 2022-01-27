import './App.css';
import StartMenu from './components/StartMenu';
import Header from './components/Header';
import Map from './components/Map';
import { useState } from 'react';

function App() {
  const [showLevelSelect, setShowLevelSelect] = useState(true);
  const [currentLevel, setCurrentLevel] = useState({name: ''});
  //X and Y Coordinates for center of the targeting box
  const [pageX, setPageX] = useState(0);
  const [pageY, setPageY] = useState(0);
  const [showTargetBox, setShowTargetBox] = useState(false);
  const [showKey, setShowKey] = useState(false);
  //Mock data for the characters array
  const [characters, setCharacters] = useState([{name: 'Spock', found: true}, {name: 'Master Chief', found: false}, {name: 'Claptrap', found: false}]);

  const updateCoords = (e) => {
    setPageX(((e.nativeEvent.offsetX / document.querySelector('.map').clientWidth) * 100).toFixed(2));
    setPageY(((e.nativeEvent.offsetY / document.querySelector('.map').clientHeight) * 100).toFixed(2));
    setShowTargetBox(!showTargetBox);
  }
  
  const getLevel = (e) => {
    const {id} = e.target;
    //Close the start menu on level select
    setShowLevelSelect(!showLevelSelect);
    //Mock for retreiving map from the server
    setCurrentLevel({name: id});
  }

  return (
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
        /> : ''}
      <Map 
        level={currentLevel}
        characters={characters}
        updateCoords={updateCoords}
        pageX={pageX}
        pageY={pageY}
        showTargetBox={showTargetBox}
      />
    </div>
  );
}

export default App;
