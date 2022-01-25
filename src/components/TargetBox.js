import '../styles/TargetBox.css';
import DropMenu from './DropMenu';

const TargetBox = (props) => {
    const style = {
        left: `calc(${props.pageX}% - 2vw)`,
        top: `calc(${props.pageY}% - 2vw)`
    }

   return(
        <div className='target-box' style={style}></div>
   ) 
}

export default TargetBox;
