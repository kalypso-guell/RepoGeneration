// la clave en JS se llama propiedad
// el valor de una propiedad puede ser una función, esto es un metodo: una función asociada a un objeto.


const playerOne = {

    "name" : "Ash",
    "surname" : "Springs",
    "atack" : 21,
    "inventory" : [
        "Apple",
        "Potion",
        "Ruby"
    ],
    "fullName" : function () {
        return "Ash Springs"
    }
}

//Otro ejemplo
//objetos literales, porque literalmente estoy escribiendo el objeto. Podemos generar objetos mediante funciones, por eso hay otro tipo. 

const student = {
    name : "Alberto",
    age : 18,
    active: true ,
    greeting: function () {
        return "Hello Alberto"
    }
}

console.log(student.greeting());
// para que se imprima lo que retorna la funcion tengo que invocarla con el .greeting () con parentesis

//Objetos incorporados estandar
// PI es una propiedad del objeto incorporado Math

console.log(Math.SQRT2);

// Math.trunc nos otorga la parte entera del numero

// Los metodos se definen dentro de objetos. Con la palabra reservada "this" podemos acceder a una propiedad especifica de ese objeto.

const student1 = {
    name : "Ash",
    surname : "Springs",
    fullName : function () {
        return `${this.name} ${this.surname}`
    }
}
console.log(student1.fullName());



// Construcción de objetos que comparten las mismas propiedas y metodos pero los valores son diferentes. 
// Utilizamos la funcion constructora para crear estos objetos. 
//funcion que construye objeto de estudiantes el nombre de la funcion lleva la primera letra en mayus.
//Definimos las propiedades del objeto
function User(nombre, rut, edad, activo) { 
    this.name = nombre,
    this.rut = rut,
    this.age = edad,
    this.active = activo,
    this.greeting = function () {
        return `Hola ${this.name}, tu rut es ${this.rut} y tienes ${this.age} años`
    }
}

const user1 = new User("Luis" , "17843055-5", 25, true) //invocar a la funcion constructora con todas las definiciones
const user2 = new User("Matias", "19639484-5", 27, false )


console.log(user2.greeting())

