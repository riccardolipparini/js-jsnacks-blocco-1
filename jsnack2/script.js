// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

// prendere in imput le due parole
// stabilire quale delle parole è piu lunga
// utilizzo lenght sulle parole per confrontarle







const contain = document.getElementById("container");

// creo due costanti prompt
const parolaUno = prompt("inserischi parola");
const parolaDue = prompt("inserisci parola");

if(parolaUno.length > parolaDue.length) {
    contain.innerHTML = `${parolaDue} ${parolaUno}`
}else if(parolaUno.length <= parolaDue.length) {
    contain.innerHTML = `${parolaUno} ${parolaDue}`
}

