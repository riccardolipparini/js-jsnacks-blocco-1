// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

// collego il div ad una costante
const contain = document.getElementById("container");

// creo due costanti prompt
const numeroUno = prompt("inserischi numero");
const numeroDue = prompt("inserisci numero");

// stabilisco l'if
if(numeroUno > numeroDue){
    contain.innerHTML = `Il numero maggiore è:${numeroUno}`
} else if(numeroUno < numeroDue){
    contain.innerHTML = `Il numero maggiore è:${numeroDue}`
} else{
    contain.innerHTML = `I numeri sono uguali`
}
