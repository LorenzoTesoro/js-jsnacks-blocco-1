/* L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */

// 1. L’utente inserisce due parole in successione, con due prompt. - prompt 2x

const firstWord = prompt("Inserisci la prima parola");
const secondWord = prompt("Inserisci la seconda parola");

let divEl = document.querySelector("div");

// 2. Il software stampa prima la parola più corta, poi la parola più lunga.- if/ else

if(firstWord.length > secondWord.length){
    divEl.innerHTML = `${secondWord}, ${firstWord}`;
} else if (secondWord.length > firstWord.length){
    divEl.innerHTML = `${firstWord}, ${secondWord}`;
} else {
    divEl.innerHTML = "le parole hanno la stessa lunghezza";
}