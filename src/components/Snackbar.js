import '../styles/Snackbar.css'

const Snackbar = (props) => {
    const style = props.message.isCorrect ? {backgroundColor: 'green'} : {backgroundColor: 'red'};
    return(
        <div 
            className={props.showSnackbar ? 'snackbar moved' : 'snackbar'}
            style={style}>
            {props.message.text}
        </div>
    )
}

export default Snackbar;