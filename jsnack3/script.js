// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti

// chiedere all'utente 10 volte un numero
// segnarsi i 10 numeri in un array
// sommare i 10 numeri con zero
// stampare il risultato della somma
const contain = document.getElementById("container");
const numbers = []
let sum = 0
for(i = 0; i < 10; i++){
    const askNumbers= prompt(`scrivi un numero`);
    numbers.push(askNumbers);
    sum += numbers[i];  
    console.log(sum);
}




