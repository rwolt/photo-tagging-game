import './App.css';
import { useState } from 'react';
import planetiso from './images/planetiso.png';

function App() {
  let [pageX, setPageX] = useState(0);
  let [pageY, setPageY] = useState(0);

  const updateDisplay = (e) => {
    setPageX(Math.round((e.nativeEvent.offsetX / document.querySelector('.planet').clientWidth) * 100));
    setPageY(Math.round((e.nativeEvent.offsetY / document.querySelector('.planet').clientHeight) * 100));
  }

  return (
    <div className="App">
      <p className='screenlog'>
        Page X/Y: {pageX}%, {pageY}%
      </p>
      <img onClick={updateDisplay} className="planet" src={planetiso} />
    </div>
  );
}

export default App;
