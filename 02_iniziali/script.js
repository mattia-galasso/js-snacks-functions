/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
/**
 * This function takes an array and returns the initials of each word.
 * @param {array} nameArray Array populated by Words
 * @returns {array} Array with initials
 */
function isInitials(nameArray) {
  const initials = [];
  for (let i = 0; i < nameArray.length; i++) {
    const currentName = nameArray[i];
    isNameInit = currentName[0];
    initials.push(isNameInit);
  }
  return initials;
}

// Invoca la funzione qui e stampa il risultato in console
const isNamesInitials = isInitials(names);

console.log(names);
console.log(isNamesInitials);
//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
