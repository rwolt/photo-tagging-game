import '../styles/Map.css';
import TargetBox from './TargetBox';
import DropMenu from './DropMenu';
import CharacterTargets from './CharacterTargets';
import Tags from './Tags';
import Snackbar from './Snackbar';
import LeaderBoard from './LeaderBoard';
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
            <Tags characters={props.characters} />
            {!props.showLeaderBoard && props.showPopup ? 
                <NameForm 
                    finishTime={props.finishTime} 
                    playerName={props.playerName} 
                    showLeaderBoard={props.showLeaderBoard} 
                    handleChange={props.handleChange}
                    handleSubmit={props.handleSubmit}
                /> : ''
            }
            {props.showLeaderBoard && props.showPopup ?
                <LeaderBoard 
                    topTen={props.topTen}    
                /> : ''
            }    
            {props.showTargetBox && !props.allFound? 
                <TargetBox
                    pageX={props.pageX}
                    pageY={props.pageY}
                /> : ''
            }
            {props.showTargetBox && !props.allFound ? 
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