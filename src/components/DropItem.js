import '../styles/DropItem.css';

const DropItem = (props) => {
    return(
        <li className="drop-item">
            {props.name}
        </li>
    )
}

export default DropItem;