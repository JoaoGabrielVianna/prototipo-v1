import React from "react";
import './navigationbar.css';
function Indicator({positionX = 0, positionY = -53}){
    return(
        <div className="Indicator" style={{transform: `translate(${positionX}px, 0px)`}}></div>
        // transform: translate(-50%, -50%);
    )
}

export default Indicator;