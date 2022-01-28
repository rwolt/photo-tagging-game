import '../styles/Map.css';
import TargetBox from './TargetBox';
import DropMenu from './DropMenu';

const Map = (props) => {

        return(
        <div className='map'>
            <img 
                className='level-image' 
                src={props.level.imageURL} 
                onClick={props.updateCoords} 
            />
            {props.showTargetBox ? 
                <TargetBox
                    pageX={props.pageX}
                    pageY={props.pageY}
                /> : ''
            }
            {props.showTargetBox ? 
                <DropMenu   
                    characters={props.characters}
                    pageX={props.pageX}
                    pageY={props.pageY}
                /> : ''
            } 
        </div>
    )
}

export default Map;