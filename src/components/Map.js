import '../styles/Map.css';
import TargetBox from './TargetBox';
import DropMenu from './DropMenu';
import CharacterTargets from './CharacterTargets';

const Map = (props) => {

        return(
        <div className='map'>
            <img 
                className='level-image' 
                src={props.level.imageURL} 
                onClick={props.updateCoords} 
            />
            {props.showCharacterTargets ? 
                <CharacterTargets characters={props.characters}/> 
                : ''
            }
            {props.showTargetBox ? 
                <TargetBox
                    pageX={props.pageX}
                    pageY={props.pageY}
                /> : ''
            }
            {props.showTargetBox ? 
                <DropMenu   
                    characters={props.characters}
                    handleSelect={props.handleSelect}
                    pageX={props.pageX}
                    pageY={props.pageY}
                /> : ''
            } 
        </div>
    )
}

export default Map;