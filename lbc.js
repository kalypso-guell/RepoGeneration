/*
Ejercicio en python
 
def aprobatoria(notas)
	promedio = sum(notas)/len(notas)
	if promedio >= 4.0:
		print("Aprobado")
	elif promedio < 4.0:
		print("Reprobado")
	else:
		print ("promedio no válido")
 
def menu()
	notas = []
	while(true):
		nota = input("Ingrese nota o fin: ")
		if note != "fin":
			notas.append(float(nota))
		else:
			break
	return aprobatoria(notas)
 
menu()
*/



const prompt = require('prompt-sync')()


function suma (notas) {

    let count = 0
    notas.forEach(function(e) {
        count = count + e })
        return count
    }
    



function aprobatoria (notas) {

    let promedio = suma(notas)/notas.length
    if (promedio < 4.0 ) {
        console.log(`Reprobado, tu promedio es: ${promedio}`)
    } else if (promedio >= 4.0) {
        console.log(`Aprobado, tu promedio es: ${promedio}`)
    } else {
        console.log("opcion no valida")
    }
   }



function main () {

    let notas = []
    
    while (true) {
        let nota = prompt("Ingrese su nota o fin: ")
        if (nota != "fin") {
            notas.push(parseFloat(nota))

        } else {
         break
         }
      } 
    return aprobatoria (notas)
}

main()



