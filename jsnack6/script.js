// Genera un array di 50 numeri random. Nell’array non devono esserci doppioni.

// creo un array vuoto
// randomizzo generazione di numeri
// mi fermo quando ho trovato 50 numeri diversi


const arrNumbers = [];
let arrLen = 50
let i = 0

while(i < arrLen){

    let num = Math.floor(Math.random() * 100 ) + 1;
    if(num !== arrNumbers[i]){
        arrNumbers.push(num);
        
    }
    console.log(arrNumbers);
   
    i++;

}