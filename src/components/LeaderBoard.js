import '../styles/NameForm.css';

const LeaderBoard = (props) => {
    return(
        <div className="name-form">
            <h2>High Scores</h2>
            {props.topTen.map(entry => {
                return(
                    <p>{entry.name}  {entry.time} seconds </p>
                )
            })}
        </div>
    )
}

export default LeaderBoard;