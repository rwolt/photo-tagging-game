const CharacterTargets = (props) => {
    return(
            props.characters.map(character => {
                let style = {}
                if(character.targetbox.p1) {
                    const {p1, p2} = character.targetbox;
                    style = {
                        position: 'absolute',
                        top: `${p2.y}%`,
                        left: `${p1.x}%`,
                        width: `${p2.x - p1.x}%`,
                        height: `${p1.y - p2.y}%`,
                    }
                return(
                    <div 
                        key={character.id} 
                        id={`${character.name} target`} 
                        style={style} 
                    />
                )
                } else {return ''} 
            })    
    )
}

export default CharacterTargets;