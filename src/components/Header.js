import Timer from './Timer';
import Key from './Key';
import '../styles/Header.css';

const Header = (props) => {
    return(
        <div className='header'>
            <p id='coords'>X: {props.pageX}%, Y: {props.pageY}%</p>
            <Timer 
                startTimer={props.startTimer}
            />
            <Key 
                setShowKey={props.setShowKey}
                showKey={props.showKey}     
                characters={props.characters}
            />
        </div>
    )
}

export default Header;