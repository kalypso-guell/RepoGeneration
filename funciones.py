resultado = 2 + 2
resultado2 = 2 + 3

# Funciones se utiliza:
# "def" "nombre_de_la_funcion"():
# "return" le dice a la función que nos permita utilizar el valor/salida de la funcion. Una funcion puede o no retornar algo
def suma():
    return 2 + 2

#invocar a una función (se ejecuta el codigo dentro de ella), es muy importante para utilizarla, lo hacemos así: 
suma() # es 4
print(suma()) # así podemos imprimir el valor de la función en la terminal.

############### 

def resta():
    print(f"{3-2}") #vemos la impresión de la funcion en la terminal, pero no está retornando nada al exterior. Esto lo podemos comprobar. 
    return "Retorno desde la función" 

#Invoco a las funciones
suma() #hay que mandar a imprimir el valor ya que solo tiene return indentado como lo hicimos en la linea 12.
resta() #imprimira el valor 1 ya que print esta dentro de la funcion resta. 

#si intento almacenar en una variable la invocacion de la funcion resta.

resultado4 = resta() #aqui se invoca la funcion y es en esta linea que se llama a la referencia de la funcion y comenzamos a ejecutar todo el codigo de la función. Esto nos da el valor 1

print(resultado4) #no me imprimirá nada ya que la funcion resta no retorna nada. hay que incluir el return indentado en la funcion definida. Ahora como incluimos un return, podemos ver "Retorno desde la funcion" en la terminal.

# en la linea 18 indentamos un retorno a la funcion resta para que nos retorne un valor en la terminal.

# "None" es un tipo de dato que se asigna en el caso de las funciones, cuando una función no tiene un retorno explícitamente definido. 

# despues de un return no se ejecuta nada más, le da una finalización al bloque de código dentro de una función en este caso.

#ARGUMENTOS DE LAS FUNCIONES
# las incluimos dentro del parentesis de la def de la funcion. Ejemplo:

def suma_1(num1, num2):
    return num1 + num2

#Entonces ingresamos los valores de los argumentos de la siguiente manera y que me imprima el valor de la funcion.

print(suma_1(3, 4)) #esto me daria 7
print(suma_1(10, 5)) # =15
print(suma_1(30, 100)) # =130
