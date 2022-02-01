import '../styles/Map.css';
import TargetBox from './TargetBox';
import DropMenu from './DropMenu';
import CharacterTargets from './CharacterTargets';
import Snackbar from './Snackbar';
import NameForm from './NameForm';
import { useEffect } from 'react/cjs/react.development';

const Map = (props) => {


        return(
        <div className='map'>
            <img 
                className='level-image' 
                src={props.level.imageURL}
                onClick={props.updateCoords} 
                onLoad={props.startSession}
            />
            <Snackbar 
                showSnackbar={props.showSnackbar}
                message={props.message}
            />
            {props.showCharacterTargets ? 
                <CharacterTargets characters={props.characters}/> 
                : ''
            }
            {props.showPopup ? 
                <NameForm timer={props.timer}/> :
                ''
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