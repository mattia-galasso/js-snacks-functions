/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const initialChoice = "a".trim().toLowerCase();

// Dichiara la funzione qui.
function namesInitials(array, string) {
  const isNamesChoice = [];

  console.log("Array: ", array, "||", "String: ", string);
  for (let i = 0; i < array.length; i++) {
    const currentName = array[i];
    if (currentName[0].toLowerCase() === string) {
      isNamesChoice.push(currentName);
    }
  }
  return isNamesChoice;
}

// Invoca la funzione qui e stampa il risultato in console
const isInitialsNames = namesInitials(names, initialChoice);

console.log(isInitialsNames);
//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
