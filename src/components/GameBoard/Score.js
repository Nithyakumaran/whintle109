
import React from 'react';
import './Score.css';

const Score = ({ score, message, onPlayAgain }) => {
  return (
    <div className="score-container">
      <h2 className="score-title">Your Score</h2>
      <div className="score-value">{score}</div>
      <div className="score-message">{message}</div>
      <button className="play-again-button" onClick={onPlayAgain}>
        Play Again
      </button>
    </div>
  );
};

export default Score;