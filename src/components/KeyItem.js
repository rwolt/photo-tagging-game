import '../styles/KeyItem.css';

const KeyItem = (props) => {
   
    const styledClass = props.character.found ? 'key-item key-item-found' : 'key-item';
    
    return(
        <li
        className={styledClass}>
        <img className='key-image' src={props.character.image} />
           {props.character.name} 
        </li>
    )
}

export default KeyItem;