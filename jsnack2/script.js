// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

// collego il div ad una costante
const contain = document.getElementById("container");

// creo due costanti prompt
const parolaUno = prompt("inserischi parola");
const parolaDue = prompt("inserisci parola");

// stabilisco l'if
if(parolaUno > parolaDue){
    contain.innerHTML += `${parolaDue}`
    contain.innerHTML += `${parolaUno}`
} else if(parolaUno < parolaDue){
    contain.innerHTML += `${parolaUno}`
    contain.innerHTML += `${parolaDue}`
} 
