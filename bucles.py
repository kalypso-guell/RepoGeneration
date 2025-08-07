# bucle "for in"
# se utiliza cuando se conoce cuantas repeteciones/itineraciones se harán del bucle
lista_de_nombre = ["Alejandra", "Luis", "Alberto", "Josefa", "Daniela"]

#"name" es una variable dentro del for, para referenciar el tipo de elementos  que contiene la lista
'''
for name in lista_de_nombre:  
    print(name)  
    
'''
# de esta forma podemos imprimir en 2 lineas de codigo todos los nombres almacenados en la lista.

lista_de_numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]  

# si me piden que numeros del 1 al 1000 en el fizzbuzz, uso la funcion (range) para armar una lista con todos esos numeros.

# hay dos anotaciones para la funcion "range" range(punto de partida, punto de corte), o range(11) --> este tipo de anotación me crea una lista de 11 elementos partiendo desde el 0 (por el tipo de anotacion), osea genera una lista del 0 al 10 (11 numeros).

limite = int(input("Hasta que numero quiere jugar el fizzbuzz: "))

numeros = range(1, limite + 1)  #incluye al 1, pero no incluye el 1001, entonces llega hasta el 1000 como pidieron

for numero in numeros:
    if numero % 3 == 0 and numero % 5 == 0: # verificar si el numero es divisible por 3 y 5
     print("Fizz Buzz")
    elif numero % 3 == 0 : # verificar si un numero es divisible por 3
     print("Fizz")
    elif numero % 5 == 0 : # verificar si un numero es divisible por 5
     print("Buzz")
    else:
     print(numero)    
