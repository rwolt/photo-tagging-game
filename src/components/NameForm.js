import '../styles/NameForm.css';

const NameForm = (props) => {
    return(
        <div className="name-form">
            <p>Time: {props.timer} seconds</p>
            <p>Enter your name for the leaderboard</p>
            <form>
                <input name="name" type="text"></input>
            </form>
            <button className="submit-button" type="submit">Submit</button>
        </div>
    )
}

export default NameForm;