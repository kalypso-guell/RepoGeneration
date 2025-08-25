//CLASES
// una clase es un grupo de objetos relacionados.
//conceptualmente es una plantilla para un tipo de objeto. 
//ejemplo:



//vehiculo

class Vehiculo {
    // se definen las propiedades del objeto dentro de la funcion constructor
    constructor (marca, modelo,color) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this._velocidad = 0;
    };
    // dentro de la clase se definen los métodos de la clase/plantilla de objetos
    getInfo(){
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Color: ${this.color}`
    };

    acelerar (){
        this._velocidad += 10;
    };
    //getter es un metodo que nos permiten obtener datos del objeto
    // el "_" es una convencion para que esta propiedad no se modifique desde fuera, sino desde un metodo especifico 

    frenar(){
        this._velocidad -= 10;
    };

    get velocidad() {
        return this._velocidad;
    };

    //setter nos permite modificar algun valor dentro de una propiedad

    set velocidad (valor) {
         this._velocidad = valor;
    };

};
// instanciar la creacion de un objeto
// aqui tengo dos instancias de la clase
const kia = new Vehiculo ("Kia", "Rio", "Rojo")

const toyota = new Vehiculo ("Toyota", "4Runner", "Negro")

console.log(kia.color)
console.log(kia.getInfo())
console.log(kia.velocidad)//no es necesario los () porque es un getter.

//incrementar velocidad al kia


// kia.velocidad = 50 //le cambio la velocidad con el setter

console.log(kia)

kia.acelerar() // invoco la funcion/metodo acelerar de la clase
console.log(kia.velocidad)