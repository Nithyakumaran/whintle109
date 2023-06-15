import React from 'react';
import PropTypes from 'prop-types';
import './ColorFeedback.css';

const ColorFeedback = ({ key, feedback }) => {
  //const feedback = [];
  return (
    <>
  {feedback.map((l,index) => (<div key= {index} className={l.color+" grid-item"}> {l.letter}</div>))}
  </>)
};

ColorFeedback.propTypes = {
  key: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default ColorFeedback;
