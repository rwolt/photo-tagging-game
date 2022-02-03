import '../styles/NameForm.css';

const LeaderBoard = (props) => {
    return(
        <div className="name-form">
            <h2>High Scores</h2>
            <div className="high-scores">
                {props.topTen.map(entry => {
                    return(
                        <div className="score-entry">
                            <span>{entry.name}</span>  
                            <span>{entry.time} sec</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default LeaderBoard;