import '../styles/KeyMenu.css';
import KeyItem from "./KeyItem"
const KeyMenu = (props) => {

   return( 
        <ul className="key-menu">
            {/* Render a dropdown item for each character that has not yet been found */}
            {props.characters.map((character) => {
                return(
                (character.found === false) ?
                    <KeyItem character={character} className="key-found" /> :
                 
                    <KeyItem character={character} />
                );
            })}
        </ul>
   )
}

export default KeyMenu;
   