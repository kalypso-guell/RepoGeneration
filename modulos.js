
/* separamos partes de nuestro codigo en modulos que son archivos difrentes.
luego podemos exportar  cada uno de estos archivos individulas y los importamos en el archivo grande.
Nos ayuda a tener el codigo más limpio.
¿Qué podemos modularizar?
- variables
- funciones
- clases
- etc.
*/
// ¿Cómo podemos modularizar? Hay 2 mecanismos:
// 1) mecanismo: CommonJS --> antiguo
// 2) mecanismo: Módulos ECMAS

//importamos con CommonJS
/*
const x = require("./constantes.js") //esta es la forma original sin destructurar
const {listaNombres, suma, resta} = require("./constantes.js") // x en este caso sería el objeto, pero puedo destructurar, osea extraer lo que está dentro del objeto cambiando la variable este caso x por {}
console.log(x.listaNombres)  // puedo ahora llamar literalmente sin la anotacion x.
console.log(x.suma())
console.log(x.resta()) 
/* como en el archivo constantes estoy exportando solo listaNombres, 
a CommonJS le da lo mismo el nombre de la constante pero la direccion que pongamos en require tiene que ser igual.*/

/* Ahora como vamos a exportar un objeto desde constantes.js como es un objeto literal, 
tenemos exportar literalmente */
// MECANISMO EcmaJS

// import {listaNombres as listaNombres, suma , resta}  from "./constantes.js" 
import suma , {listaNombres,resta} from "./constantes.js"  
// import * as x from "./constantes.js" // el * dice que tiene importar todo. 
//import listaNombres from "./constantes"
console.log(suma())
console.log(listaNombres)
console.log(resta())

//DEPENDENCIAS
// npm nos permite el manejo de paquetes, prompt-sync es un paquete de npm
// hay paquetes que definen funcionalidades o tareas repetitivas.