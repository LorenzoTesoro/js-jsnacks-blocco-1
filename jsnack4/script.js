/* In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. */

// creo un array

const guests = [
    'Marco',
    'Luigi',
    'Sonia',
    'Francesca'
]

// chiedo all'utente il suo nome e lo salvo in una variabile - prompt

const userName = prompt('Inserisci il tuo nome');


// Confrontare il valore inserito dall'utente con gli elementi dell'array

let i = 0;

let canAccess = false;

while (i < guests.length) {
    
    const thisGuest = guests[i];

    if(userName === thisGuest){
        canAccess = true;
        console.log("Sei tra gli invitati");
    }

    i++;
} 

console.log("Non sei tra gli invitati");