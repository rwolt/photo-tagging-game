import '../styles/KeyItem.css';
import { storage } from '../utils/firebase';
import { ref, getDownloadURL } from '@firebase/storage';
const KeyItem = (props) => {
   
    const styledClass = props.character.found ? 'key-item key-item-found' : 'key-item';

    return(
        <li
        className={styledClass}>
        <img className='key-image' src={props.character.imageURL} />
           {props.character.name} 
        </li>
    )
}

export default KeyItem;