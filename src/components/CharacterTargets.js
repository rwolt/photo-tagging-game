const CharacterTargets = (props) => {
    return(
            props.characters.map(character => {
                const {p1, p2} = character.targetbox;
                const style = {
                    position: 'absolute',
                    top: `${p2.y}%`,
                    left: `${p1.x}%`,
                    width: `${p2.x - p1.x}%`,
                    height: `${p1.y - p2.y}%`,
                    border: '2px solid hotpink'
                }
                return(
                    <div 
                        key={character.id} 
                        id={`${character.name} target`} 
                        style={style} 
                    />
                )
            })    
    )
}

export default CharacterTargets;