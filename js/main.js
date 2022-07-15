let myArray = [];

console.log(myArray);
let i = 0;

while(myArray.length < 5){
    
    console.log("<-- Ciclo numero " + i);
    num = Math.round(Math.random() * 100);

    let incluso = myArray.includes(num);
    console.log('Numero generato: ' + num);
    if( incluso === false){
        console.log("Il numero non era già nell'array")
        myArray.push(num); 
    } 

    console.log(myArray);

    i++;

}

let numeri_random = document.getElementById('numeri_random');

numeri_random.innerHTML = myArray;

setInterval(hidden_numeri, 6000);

function hidden_numeri (){
    numeri_random.innerHTML = '';
}

const clock = setInterval(show_prompt, 5000);

let numeroUtenteArray = [];

function show_prompt(){
    
    for(let i = 1; i <= 5; i++){
        console.log("<-- Ciclo numero " + i);
        let numeroUtente = parseInt(prompt('inserisci un numero'))
        console.log('Numero digitato: ' + numeroUtente);
        numeroUtenteArray.push(numeroUtente);
    }  

    let uguali = true;

    for (let i = 0; i < myArray.length; i++ ){
        if (myArray[i] !== numeroUtenteArray[i]){
            uguali = false;
        }

        console.log( myArray[i], numeroUtenteArray[i]);

        console.log("Giro N" + i + " Confronto " + myArray[i] + " con " + numeroUtenteArray[i] + ": " + uguali);
    }

    let numeriComputer = document.getElementById('numeriComputer');
    let numeriUtente = document.getElementById('numeriUtente');

    if(uguali === true){
        numeriComputer.innerHTML = `<h1>Numeri : ${myArray}</h1>`
        numeriUtente.innerHTML = `<h1>Numeri utente : ${numeroUtenteArray}</h1>`
    } else {
        alert('non sono uguali')
    }
    
    console.log(numeroUtenteArray);

    clearInterval(clock);
}



















