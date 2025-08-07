# la sentencia "if" nos permite determinar si algo es verdadero o falso, ademas podemos anidar dentro del if, la funcion "elif" sirve como "sino" no avanza a las siguientes condiciones ya que consiguió un primer True el programa. Si arroja False, continua a la siguiente condición. 
#El simbolo "else" se utiliza cpara que se ejecute la ultima condición, por eso se utiliza al final. Osea si ponemos varias condiciones seria: if - elif - elif - elif - else.
#elif y else se utilizan solo si previamente utilicé if
# la simbología == significa: es igual a
# el signo % nos da el resto de la división
"""
if 5 < 4:  #devuelve implicitamente True or False
    print("Es verdadero")
"""

numero = int(input("Ingrese un numero")) #usamos la funcion "int dentro del input, porque cuando ingresamos algo desde la terminal, siempre será un string, lo que no nos permite hacer operaciones matematicas, entonces al agregar el int, permitimos que el programa al ingresar el numero desde la terminal por el input, lo convierta de string a integer osea un entero"


if numero % 3 == 0 and numero % 5 == 0: # verificar si el numero es divisible por 3 y 5
    print("Fizz Buzz")
elif numero % 3 == 0 : # verificar si un numero es divisible por 3
    print("Fizz")
elif numero % 5 == 0 : # verificar si un numero es divisible por 5
    print("Buzz")
else:
    print(numero)    

#ESTA SERIA LA LOGICA DEL FIZZ BUZZ