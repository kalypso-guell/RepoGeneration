# Programar una calculadora sencilla que:sume, reste, multiplique y divida dos numeros. 
#Podemos encapsular las operaciones matematicas.
#Definir las funciones para cada operacion matematica.
#Definir funcion que imprima el resultado. 
#Capturar datos para realizar las operaciones (entrada del usuario por medio del "input")

#puedo definir la suma para una lista de numero asi:
# def sumar(list_num)
#   return sum(list_num)

def sumar(num1, num2):
    return num1+num2

def restar(num1, num2):
    return num1-num2

def multiplicar (num1, num2):
    return num1*num2 

def dividir (num1, num2):
    return num1/num2

#Funcion para imprimir

def imprimir_resultado(resultado):
    print(f"El resultado de la operacion es: {resultado}")

print("Bienvenidx a la app de calculadora!")

operacion_a_realizar = input("Indica la operacion matematica que deseas realizar: suma, resta, multiplicar, dividir: ")

if (operacion_a_realizar == "suma" or operacion_a_realizar == "resta" or operacion_a_realizar == "dividir" or operacion_a_realizar == "dividir"):
    num1 = float(input("Ingrese el primer numero: "))
    num2 = float(input("Ingresa el segundo numero: "))
    if (operacion_a_realizar == "suma"):
        resultado=  sumar(num1, num2)
    elif(operacion_a_realizar == "resta"):
        resultado= restar(num1, num2)
    elif (operacion_a_realizar == "multiplicar"):
        resultado = multiplicar(num1, num2)
    elif(operacion_a_realizar == "dividir"):
        resultado= dividir(num1, num2)
    imprimir_resultado(resultado)
else: 
    print("Opción no válida")