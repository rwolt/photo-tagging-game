import DropItem from './DropItem';
import '../styles/DropMenu.css';

const DropMenu = (props) => {
    const style = {
        left: `calc(${props.pageX}% + 1.05vw)`,
        top: `calc(${props.pageY}% + 1.05vw)`
    }

    return(
            <ul className='drop-menu' style={style}>
            {/* Render a dropdown item for each character that has not yet been found */}
                {props.characters.filter(character => character.found === false)
                    .map(character => {
                        return(
                            <DropItem 
                                key={character.id} 
                                character={character} 
                                handleSelect={props.handleSelect}
                            />   
                        )
                    }
                )}
            </ul>
    )
}

export default DropMenu;