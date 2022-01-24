import '../styles/StartMenu.css';

const StartMenu = (props) => {
    return(
        <div className="start-menu">
            <div 
                className='level-select'
                onClick={props.getLevel}>
                    <div id="planetiso" className='level-button'>Level 1 - Planet ISO</div>
                    <div id="prehisoria" className='level-button'>Level 2 - PrehISOria</div>
                    <div id="isorcery" className='level-button'>Level 3 - ISOrds and ISOrcery</div>
            </div>
        </div>
    )
}

export default StartMenu;