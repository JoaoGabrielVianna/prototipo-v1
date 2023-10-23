import React, { useState } from 'react';

const MovingComponent = () => {
  const [isMoving, setIsMoving] = useState(false);

  const handleMove = () => {
    setIsMoving(!isMoving);
  };

  const style = {
    transform: isMoving ? 'translateX(100px)' : 'translateX(0)',
    transition: 'transform 0.5s ease-in-out',
    width: 100,
    height: 100,
    background: 'blue',
    position: 'absolute',
    left: 0,
    top: 300
  };

  return (
    <div>
      <div style={style} className="moving-box"></div>
      <button onClick={handleMove}>Mover</button>
    </div>
  );
};

export default MovingComponent;
