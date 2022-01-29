import '../styles/DropItem.css';

const DropItem = (props) => {
    return(
        <div 
            onClick={props.handleSelect} 
            className="drop-item"
            id={props.character.name}
        >
            <li>{props.character.name}</li>
        </div>
    )
}

export default DropItem;