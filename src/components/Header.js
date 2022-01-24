import '../styles/Header.css';

const Header = (props) => {
    return(
        <div className='header'>
            <p>X: {props.pageX}%, Y: {props.pageY}%</p>
        </div>
    )
}

export default Header;