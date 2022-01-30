import { useEffect } from "react";

const Timer = (props) => {

    useEffect(() => {
        const timer = setInterval(() => {
            props.tick();
        }, 1000);
        return( 
            () => clearInterval(timer)
        )
    }, [props.timer]);

    return(
        <p>{props.timer ? `${props.minutes}:${props.seconds}` : '0:00'}</p>
    )
}

export default Timer;