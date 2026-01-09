/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";
const vowels = ["a", "e", "i", "o", "u"];

// Dichiara la funzione qui.
/**
 * This function takes a word and returns the number of vowels.
 * @param {string} isWord Word for vowel counting
 * @param {array} isVowels Array with vowels
 * @returns {number} Number of vowels
 */
function hasVowals(isWord, isVowels) {
  let numberVowals = 0;
  for (let i = 0; i < isWord.length; i++) {
    const currentChar = isWord[i];
    if (isVowels.includes(currentChar)) {
      numberVowals++;
    }
  }
  return numberVowals;
}

// Invoca la funzione qui e stampa il risultato in console
const wordHasVowals = hasVowals(word, vowels);

console.log("Word: ", word, "|", "Number of Vowels: ", wordHasVowals);
//Risultato atteso se si passa 'javascript': 3 (a, a, i)
