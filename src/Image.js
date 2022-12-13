import React from 'react';

export const Image = (props) => {
    

    return (
    <div>
        <p><div style={{fontFamily: "Work Sans", fontSize: "1vw", color: "white"}}>{props.caption}</div></p>
        <p><img src={require('./images/' + props.source + '.png')} style={{height: "60vh", width: "auto", border: "10px solid white", borderRadius: "3vw"}}></img></p>
        <p><div style={{fontFamily: "Work Sans", fontSize: "0.8vw", color: "black", background: "rgba(255, 255, 255, 0.3", padding: "1vw"}}>{props.annotation}</div></p>
    </div>
    )
}