import '../styles/Key.css';
import KeyMenu from './KeyMenu';

const Key = (props) => {
    return(
        <div className="dropdown">
            <div 
                className="key"
                onClick={() => props.setShowKey(!props.showKey)}
            >
                <p>{props.characters.filter(character => character.found === false).length}</p>
            </div>
            {/* Render the Key Dropdown Menu if showKey is true */}
            {props.showKey ? 
                <KeyMenu characters={props.characters}/> : 
                ''
            }
        </div>
    );
}

export default Key;