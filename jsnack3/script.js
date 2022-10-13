/* Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */

// 1- Il software deve chiedere per 10 volte all’utente di inserire un numero. - ciclo for
/* let sum = 0;

for (let i = 0; i < 10; i++){
    let number = Number(prompt("inserisci un numero"));
    sum += number
    console.log(number);
}

 */


// soluzione con while
let i = 0
let sum = 0

while (i < 10) {
    let number = Number(prompt("inserisci un numero"));
    sum += number;
    i++;
} 

console.log(sum);