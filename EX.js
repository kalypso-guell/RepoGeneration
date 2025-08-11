const prompt = require('prompt-sync')() //se habilita la función prompt

// se le pide a la persona que ingrese una palabra definida en la variable x

let x = prompt("Ingrese una palabra: ")

// se utliza un bucle for para analizar cada letra de la palabra
// en primer lugar: se define el contador partiendo en 0
// en segundo lugar: se define que la cantidad de veces que se realizará el bucle osea
// en tercer lugar: por ultimo se establece que se le sumará 1 al contador por cada iteración o repeteción

for(i=0; i < x.length; i++) {  

 console.log(`Posición ${i}: ${x[i]}`);  
 
 /*  imprimimos utilizando el "formateo" que diga: Posición {Posición de la letra}: {la letra}
 
 */

}

console.log(`La cantidad de letras en tu palabra es: ${x.length}`)