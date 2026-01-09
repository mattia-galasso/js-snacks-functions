/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = "Mario";

// Dichiara la funzione qui.
/**
 * This function takes a Name and returns a greeting with the addition of "Ciao"
 * @param {string} word Name to add to "Ciao"
 * @returns {string} Returns "Ciao [Name]"
 */
const userGreet = (word) => (isGreet = "Ciao" + " " + word);

// Invoca la funzione qui e stampa il risultato in console
const isUserGreet = userGreet(userName);

console.log("isUserGreet: ", isUserGreet);
//Risultato atteso se si passa 'Mario': // ciao Mario
