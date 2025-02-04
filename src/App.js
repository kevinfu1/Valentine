// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [yesClicked, setYesClicked] = useState(false);
  const [noButtonSize, setNoButtonSize] = useState(1);
  const [yesButtonSize, setYesButtonSize] = useState(1);
  const [noButtonPosition, setNoButtonPosition] = useState({ top: '50%', left: '50%' });

  const handleYesClick = () => {
    setYesClicked(true);
  };

  const handleNoHover = () => {
    const randomX = Math.random() * (window.innerWidth - 100);
    const randomY = Math.random() * (window.innerHeight - 50);
    setNoButtonPosition({ top: `${randomY}px`, left: `${randomX}px` });
  };

  const handleNoClick = () => {
    setNoButtonSize((prevSize) => prevSize * 0.8);
    setYesButtonSize((prevSize) => prevSize * 1.2);
  };

  return (
    <div className='App'>
      {!yesClicked ? (
        <>
          <h1>Will You Be My Valentine? ❤️</h1>
          <div className='button-container'>
            <button className='yes-button' style={{ transform: `scale(${yesButtonSize})` }} onClick={handleYesClick}>
              Yes! 💖
            </button>
            <button
              className='no-button'
              style={{
                transform: `scale(${noButtonSize})`,
                position: 'absolute',
                top: noButtonPosition.top,
                left: noButtonPosition.left,
              }}
              onMouseEnter={handleNoHover}
              onClick={handleNoClick}
            >
              No 😢
            </button>
          </div>
        </>
      ) : (
        <h2>Yay! I knew you'd say Yes! 💕🥳</h2>
      )}
    </div>
  );
}

export default App;
