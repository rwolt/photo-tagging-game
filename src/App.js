import './App.css';
import StartMenu from './components/StartMenu';
import Header from './components/Header';
import Map from './components/Map';
import { useState } from 'react';

function App() {
  const [showLevelSelect, setShowLevelSelect] = useState(true);
  const [currentMap, setCurrentMap] = useState('');
  // let [pageX, setPageX] = useState(0);
  // let [pageY, setPageY] = useState(0);

  // const updateDisplay = (e) => {
  //   setPageX(Math.round((e.nativeEvent.offsetX / document.querySelector('.planet').clientWidth) * 100));
  //   setPageY(Math.round((e.nativeEvent.offsetY / document.querySelector('.planet').clientHeight) * 100));
  // }
  
  const getLevel = (e) => {
    const {id} = e.target;
    console.log(id);
    //Close the start menu on level select
    setShowLevelSelect(!showLevelSelect);
  }

  return (
    //Show the start menu if levelSelect is true
    <div className="App">
      {showLevelSelect ? 
        <StartMenu
          getLevel={getLevel}
        /> : ''}
      <Header />
      <Map level={currentMap}/>
    </div>
  );
}

export default App;
