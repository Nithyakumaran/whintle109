function calculateScore(guesses, word) {
  const correctLetters = new Set(word.split(''));
  let score = 0;
  
  for (let i = 0; i < guesses.length; i++) {
    const guess = guesses[i];
    const guessLetters = new Set(guess.split(''));
    let correct = 0;
    
    for (const letter of guessLetters) {
      if (correctLetters.has(letter)) {
        correct++;
      }
    }
    
    if (correct === word.length && guess.length === word.length) {
      score += 10;
    } else {
      score += correct;
    }
  }
  
  return score;
}

export { calculateScore };
