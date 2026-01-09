/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const userName = "Mario";
const todayDate = new Date();
let currentHour = todayDate.getHours();
let outputMessage = "";
console.log("todayDate: ", todayDate, typeof todayDate);
console.log("currentHour: ", currentHour, typeof currentHour);

// Dichiara la funzione qui.
/**
 * This function takes the name, checks what time it is and returns a greeting message
 * @param {string} isUserName Name of the person to greet
 * @param {number} hour Current time
 * @returns {string} Output Message
 */
function greet(isUserName, hour) {
  if (hour <= 13) {
    outputMessage = "Buongiorno" + " " + userName;
  } else if (hour <= 17) {
    outputMessage = "Buon Pomeriggio" + " " + userName;
  } else {
    outputMessage = "Buona Sera" + " " + userName;
  }
  return outputMessage;
}

// Invoca la funzione qui e stampa il risultato in console
const userGreet = greet(userName, currentHour);

console.log(userGreet);

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
