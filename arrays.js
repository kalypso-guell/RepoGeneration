let colors = ["rojo" , "azul" , "verde"] ;
 
colors.forEach( c => console.log(c)) ; // recorro cada color del array

let nums = [1 , 2 , 3 , 4] ;

console.log(nums.map( n => n*3)) ; // generar una nueva lista multiplicando cada numero x 3 de la lista original.

let nums1 =  [5, 12, 8, 130, 44] ;

console.log(nums1.filter( n => n > 10)) ; // filtrar numeros mayores a 10

let names = ["Ana", "Pedro", "Juan"] ;

console.log(names.find( nm => nm.length === 4)) ; // encontrar el nombre con 4 caracteres

let nums2 = [2, 3, 4] ;

console.log(nums2.includes(3)); // verificar si incluye el array el numero 3

let animals = ["perro", "gato"] ;

animals.push("conejo") ; // agrego conejo al final
animals.pop() ; // quitar el ultimo elemento, en este caso, conejo.
animals.shift() ; // quitar el primer elemento, sería perro.
animals.unshift("loro"); //agregar al principio loro

console.log(animals) // me deberia quedar loro y gato

let letters = ["a", "b", "c", "d"] ;

console.log(letters.indexOf("c")) // deberia indicar que c tiene la posicion 2

let usuario1 = {
    nombre: "Juan Perez",
    edad: 26, 
    ciudad: "Santiago"
}

console.log(Object.keys(usuario1)) // crear una lista con las claves del objeto usuario 1
console.log(Object.values(usuario1)) // crear una lista con las valores del objeto usuario 1
console.log(Object.entries(usuario1)) // generar array del objeto en pares clave-valor

//OBEJETO ANIDADO
const usuario = {
    nombre: "Juan Perez",
    edad: 26,
    direccion: {
        ciudad: "Santiago",
        pais: "Chile",
        codigoPostal: 8320000
    },
    hobbies: ["programar", "leer", "viajar"],
    redes: {
        twitter: "@Juans",
        instagram: "@Juans_insta"
    }
};

console.log(usuario.direccion.ciudad)
console.log(usuario.direccion.codigoPostal)
console.log(usuario.hobbies[0])
console.log(usuario.redes.instagram)

// Crea una variable llamada infoCompleta que combine el nombre, ciudad y primer hobby en un string del tipo:
// "Juan Perez vive en Santiago y su hobby principal es programar."

let infoCompleta = `${usuario.nombre} vive en ${usuario.direccion.ciudad} y su hobby principal es ${usuario.hobbies[0]}.`
console.log(infoCompleta)

