import './App.css';
import StartMenu from './components/StartMenu';
import Header from './components/Header';
import Map from './components/Map';
import { useState } from 'react';

function App() {
  const [showLevelSelect, setShowLevelSelect] = useState(true);
  const [currentLevel, setCurrentLevel] = useState({name: ''});
  let [pageX, setPageX] = useState(0);
  let [pageY, setPageY] = useState(0);

  const updateCoords = (e) => {
    setPageX(Math.round((e.nativeEvent.offsetX / document.querySelector('.level-image').clientWidth) * 100));
    setPageY(Math.round((e.nativeEvent.offsetY / document.querySelector('.level-image').clientHeight) * 100));
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
      <Header pageX={pageX} pageY={pageY}/>
      {showLevelSelect ? 
        <StartMenu
          getLevel={getLevel}
        /> : ''}
      <Map 
        level={currentLevel}
        updateCoords={updateCoords}
      />
    </div>
  );
}

export default App;
