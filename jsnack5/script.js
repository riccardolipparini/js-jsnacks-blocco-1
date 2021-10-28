// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array

const contain = document.getElementById("container");
const numbers = []

for(i = 0; i < 6; i++){
    const askNumbers = prompt(`scrivi un numero`);
    

    if(askNumbers % 2 !==0){
        numbers.push(askNumbers);
        console.log(numbers);
    }
      
    
}