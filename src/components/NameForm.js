import '../styles/NameForm.css';

const NameForm = (props) => {
    return(
        <div className="name-form">
            <p>Time: {props.finishTime} seconds</p>
            <p>Enter your name for the leaderboard</p>
            <form onSubmit={props.handleSubmit}>
                <input 
                    id='playerName' 
                    name="name" 
                    type="text"
                    onChange={props.handleChange}
                    value={props.playerName}
                ></input>
                <button className="submit-button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default NameForm;