/* L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

// 1. Utente inserisce due numeri in successione - prompt 2x
const number1 = Number(prompt('Inserisci il primo numero'));
const number2 = Number(prompt('Inserisci il secondo numero'));

// 2. il programma stampa il maggiore - if/else

if(number1 > number2){
    console.log(number1);
} else{
    console.log(number2);
}