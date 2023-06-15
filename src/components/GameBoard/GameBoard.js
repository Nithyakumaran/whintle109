import React, { useState, useEffect } from "react";
import Hint from "./Hint";
import Score from "./Score";
import ColorFeedback from "./ColorFeedback";
import "./GameBoard.css";
import { getRandomWordAndHint } from '../../logic/RandomWordSelection'

const GameBoard = () => {
  // Defining state variables
  const [word, setWord] = useState("");
  const [hint, setHint] = useState("");
  const [guess, setGuess] = useState("");

  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");
  const [feedbacks, setFeedbacks] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  // Function to handle user input
  const handleInput = (event) => {
    setGuess(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Checking if guess matches the word
    if (guess === word) {
      setScore(score + 1);
      setMessage("Congratulations! You guessed the word correctly.");
      const feedbackForCurrentGuess = word.split("").map((w) => {return {letter:w, color:"green"}})
      setFeedbacks((prev) => [...prev, feedbackForCurrentGuess]);
      setGameOver(true);
    } else {
      // Calculating score based on number of correct letters
      const correctLetters = guess
        .split("")
        .filter((letter, index) => letter === word[index]);
      setScore(score + correctLetters.length);
      setMessage("Sorry, that's not the correct word.");
      // Generating color feedback for each letter in the guess
      const feedbackArray = guess.split("").map((letter, index) => {
        if (letter === word[index]) {
          return {letter:letter , color:"green"} ;
        } else if (word.includes(letter)) {
          return {letter:letter, color:"yellow"};
        } else {
          return {letter:letter, color:"red"};
        }
      });
      setFeedbacks((prev) => [...prev, feedbackArray]);
    }
    // Clearing input field
    setGuess("");
  };

  // Function to start a new game
  const handlePlayAgain = () => {
    // Generating a new word and hint
    const { word: newWord, hint: newHint } = getRandomWordAndHint();
    setWord(newWord);
    setHint(newHint);
    // Resetting state variables
    setGuess("");
    setScore(0);
    setMessage("");
    setFeedbacks([]);
  };

  
  // Initializing game with a random word and hint
  useEffect(() => {
    const { word: newWord, hint: newHint } = getRandomWordAndHint();
    setWord(newWord);
    setHint(newHint);
  }, []);
  
  return (
    <div className="game-board">
      <div className="grid">
        {feedbacks.map((feedback, index) => (
          <ColorFeedback key={index} feedback={feedback} />
        ))}
        {Array.from({ length: word.length }, (_, index) => (
          <div key={index} className="grid-item"></div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <label htmlFor="guess" className="input-label">
            Guess the word:
          </label>
          <input
            type="text"
            id="guess"
            className="input"
            value={guess}
            onChange={handleInput}
            maxLength={word.length}
            required
            disabled={gameOver? 'disabled': ''}
          />
          <button type="submit" className="submit-btn" disabled={gameOver? 'disabled': ''}>
            Submit
          </button>
        </div>
      </form>
      <Score score={score} message={message} onPlayAgain={handlePlayAgain} />
      <Hint hint={hint} />
    </div>
  );
};

export default GameBoard;