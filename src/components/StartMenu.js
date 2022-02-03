import '../styles/StartMenu.css';

const StartMenu = (props) => {
    return(
        <div className="start-menu">
            <div 
                className='level-select'
                onClick={props.getLevel}>
                    <h1 style={{color: 'white'}}>Pixel Hunt</h1>
                    <div id="prehisoria" className='level-button'>Level 1 - PrehISOria</div>
                    <div id="planetiso" className='level-button'>Level 2 - Planet ISO</div>
            </div>
        </div>
    )
}

export default StartMenu;