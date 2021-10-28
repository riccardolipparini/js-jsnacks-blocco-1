// In un array sono contenuti i nomi degli invitati
//  alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli 
//  se può partecipare o no alla festa.




const contain = document.getElementById("container");


const nomi = ["paolo" , "luca" , "riccardo" , "giovanni" , "sara" , "paola"];

let verification = prompt("Inserisci qui il tuo nome");
let trovato = false;

for (i = 0; i < nomi.length; i++) {
    if (verification == nomi[i]) {
        trovato = true;
    }
}

if (trovato == true) {
    // stiampiano trovato
    contain.innerHTML = "il tuo nome è nella lista, ci vediamo alla festa!"
} else {
    // stampiano non trovato
    contain.innerHTML = "ops, non sei invitato :("
}