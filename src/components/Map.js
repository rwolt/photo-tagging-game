import '../styles/Map.css';
import planetiso from '../images/planetiso.png';
import prehisoria from '../images/prehisoria.png';
import isorcery from '../images/isorcery.png';
import TargetBox from './TargetBox';

const Map = (props) => {

    let levelImage = '';
    switch (props.level.name) {
        case 'planetiso': 
            levelImage = planetiso;
            break;
        case 'prehisoria':
            levelImage = prehisoria;
            break;
        case 'isorcery':
            levelImage = isorcery;
            break;
        default: 
            levelImage = '';
    }

        return(
        <div className='map'>
            <img 
                className='level-image' 
                src={levelImage} 
                onClick={props.updateCoords} 
            />
            {props.showTargetBox ? 
                <TargetBox
                    pageX={props.pageX}
                    pageY={props.pageY}
                /> : ''
            } 
        </div>
    )
}

export default Map;