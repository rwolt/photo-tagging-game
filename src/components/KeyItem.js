import '../styles/KeyItem.css';

const KeyItem = (props) => {
   
    const styledClass = props.character.found ? 'key-item key-item-found' : 'key-item';
    
    return(
        <li 
        className={styledClass}>
           {props.character.name} 
        </li>
    )
}

export default KeyItem;