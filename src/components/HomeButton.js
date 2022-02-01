import '../styles/HomeButton.css';

const HomeButton = (props) => {
    return(
        <div className='home-button' onClick={props.handleMenu}>
            Menu
        </div>
    )
}

export default HomeButton;