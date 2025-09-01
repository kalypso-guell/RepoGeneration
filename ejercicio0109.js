/* Drill de Programación 1. Utiliza este proyecto para desarrollar tu actividad.
Modifica este archivo a tu conveniencia para lograr la solución.
*/

// Ejecuta npm install para instalar los paquetes del proyecto
// Ejecuta node index.js para probar tu aplicación

import promptSync from 'prompt-sync';
const prompt = promptSync();

//
// get input from the user.
//
function orden() {
  // Pedimos los 3 números al usuario (funciona en navegador)
  let num1 = parseFloat(prompt("Ingrese el primer número:"));
  let num2 = parseFloat(prompt("Ingrese el segundo número:"));
  let num3 = parseFloat(prompt("Ingrese el tercer número:"));

  // validación 
  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    console.log("Debes ingresar valores numéricos.");
  } else if (num1 === num2 && num2 === num3) {
    // los tres iguales
    console.log("Los tres números son iguales:", num1, num2, num3);
  } else {
    let mayor, medio, menor;

    // elegir el mayor y luego decidimos medio/menor
    if (num1 >= num2 && num1 >= num3) {
      mayor = num1;
      if (num2 >= num3) {
        medio = num2;
        menor = num3;
      } else {
        medio = num3;
        menor = num2;
      }
    } else if (num2 >= num1 && num2 >= num3) {
      mayor = num2;
      if (num1 >= num3) {
        medio = num1;
        menor = num3;
      } else {
        medio = num3;
        menor = num1;
      }
    } else {
      mayor = num3;
      if (num1 >= num2) {
        medio = num1;
        menor = num2;
      } else {
        medio = num2;
        menor = num1;
      }
    }

    //  si hay exactamente dos iguales
    if (
      (num1 === num2 && num1 !== num3) ||
      (num1 === num3 && num1 !== num2) ||
      (num2 === num3 && num2 !== num1)
    ) {
      console.log("Hay dos números iguales.");
    }

    // outputs
    console.log("Número mayor:", mayor);
    console.log("Número del centro:", medio);
    console.log("Número menor:", menor);

    console.log("Ordenados de mayor a menor:", mayor, medio, menor);
    console.log("Ordenados de menor a mayor:", menor, medio, mayor);
  }
}

// invocar la función
orden();
