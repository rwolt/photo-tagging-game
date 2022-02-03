import '../styles/Tags.css';

const Tags = (props) => {
    return(
        <div>
            {props.characters.filter(char => char.pageX)
                .map(char => {
                    const style = {
                        left: `calc(${char.pageX}% - 1vw)`,
                        top: `calc(${char.pageY}% + 1vw)`
                    }
                    return(
                        <div style={style} className="character-tag" key={char.id}>
                            {char.name}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Tags;