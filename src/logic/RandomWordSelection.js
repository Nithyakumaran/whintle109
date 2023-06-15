import  words  from '../data/words';

// Function to randomly select a word and hint from the words array
export function getRandomWordAndHint() {
  // Generate a random index from 0 to the length of the words array
  const randomIndex = Math.floor(Math.random() * words.length);
  // Get the word and hint at the randomly generated index
  const randomWord = words[randomIndex].word;
  const randomHint = words[randomIndex].hint;
  // Return the word and hint as an object
  return { word: randomWord, hint: randomHint };
}