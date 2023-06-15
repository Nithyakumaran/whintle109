import React from 'react';
import './Hint.css';

const Hint = ({ hint }) => {
  return (
    <div className="hint">
      <span className="hint-text">Hint:</span>
      <span className="hint-value">{hint}</span>
    </div>
  );
};

export default Hint;
