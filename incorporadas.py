# Builtins: funciones incorporadas -->  vienen incorporadas dentro del lenguaje:

print("Texto que se imprime")
range(0,45)

numers = [23,45,67,89,3,4,67,78,23,34]

sum(numers) #sumar una lista de numeros. "sum" es una funcion incorporada que suma. 

print(sum(numers)) #imprime la suma

#se realiza un bucle for para evaluar cada numero para ver cual es el numero de mayor valor. 

numero_max = 0

for numero in numers:
    if numero > numero_max:
        numero_max = numero
print(numero_max)

#pero existe el builtin "max" que hace ese mismo bucle

print(max(numers)) #son menos lineas de codigo

print(sorted(numers)) #enlista de menos a mayor
