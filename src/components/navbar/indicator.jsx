import React from "react";
import './navigationbar.css';
function Indicator({positionX = 0, positionY = -53}){
    return(
        <div className="Indicator" style={{left: positionX}}></div>
        
    )
}

export default Indicator;