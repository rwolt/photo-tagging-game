import Timer from './Timer';
import Key from './Key';
import HomeButton from './HomeButton';
import LeaderBoardButton from './LeaderBoardButton';
import Snackbar from './Snackbar';
import '../styles/Header.css';

const Header = (props) => {
    const minutes = Math.floor(props.timer / 60);
    const seconds = (props.timer % 60) < 10 ? '0' + (props.timer % 60) : props.timer % 60;

    return(
        <div className='header'>
            <p id='coords'>X: {props.pageX}%, Y: {props.pageY}%</p>
            <HomeButton />
            <LeaderBoardButton />
            {/* Show the completed time if all characters are found, else show the time */}
            {props.showLevelSelect ? '' :  
                props.allFound ? `${minutes}:${seconds}` :
            <Timer 
                tick={props.tick}
                timer={props.timer}
                minutes={minutes}
                seconds={seconds}
                allFound={props.allFound}
            />
            }
            <Key 
                setShowKey={props.setShowKey}
                showKey={props.showKey}     
                characters={props.characters}
            />
        </div>
    )
}

export default Header;