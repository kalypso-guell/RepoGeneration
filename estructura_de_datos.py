# Lista y Estructuras Clave:Valor --> Diccionarios (python), Objetos (JavaScript)
# palabra(clave):definición(valor)
#agrupar la información de un mismo usuario en una variable "user" en este caso.

print("Bienvenidx a Nexflix!, registre su cuenta aquí")

print("#######################################################") #es un tema estético

user = {                      # Tipo de variable / Estructura de datos
    "name": "Juanito",            #str
    "last_name": "Pérez",         #str
    "age": 20,                    #int
    "email": "juanito@gmail.com", #string
    "password": "1234",           #string
    "pay": False,                 #bool
    "fav_movies": []              #list (estructura de datos)
}

#print(user) #imprime diccionario. No me sirve este print para el programa de registro de nNexflix jeje

#Ahora también puedo agregar valores desde otra parte osea de variables asignadas previamente por un input, veamos un ejemplo:

name = input("Ingrese su nombre: ")
last_name = input("Ingrese su apellido: ")
age = int(input("Ingrese su edad: ")) #pongo envuelvo el input con un int() para que desde la terminal el numero que ponga la persona desde la consol, ingrese al programa como un entero, y no como un string. 
email = input("Ingrese su email: ") 
password = input("Ingrese su contraseña: ")

print("########################################################")

print("Registro existoso")


user_1 = {                      # Tipo de variable / Estructura de datos
    "name": name,                   #str
    "last_name": last_name,         #str
    "age": 20,                      #int
    "email": email,                 #string
    "password": password,           #string
    "pay": False,                   #bool
    "fav_movies": []                #list (estructura de datos)
}

print(f"Tus datos son: {user_1['name']} {user_1['last_name']} {user_1['email']}") #aqui imprimo los datos obtenidos por medio de input, almacenados en el diccionario user_1, le entrego a la persona tras su registro existoso, sus datos

print("######################################################")


print(f"Los valores del diccionario de user_1 son: {user_1.values()}")
#print(user_1.values()) #imprime los valores del diccionario

user_1["fav_movies"].append("Batman") #manipula la clave "fav_movies" a partir del .append ya que es una lista.
user_1["fav_movies"].append("Superman") #agrego superman a la lista

#print(user_1) #ahora imprimo el diccionario y me aparece batman y superman en el diccionario

#obtener valores desde la interaccion (input)
print("################################################################")
print("Ingresa 2 peliculas favoritas: ")
fav_movie_1 = input("Ingresa tu pelicula fav 1: ")
fav_movie_2 = input("Ingresa tu pelicula fav 2: ")

user_1["fav_movies"].append(fav_movie_1)   #manipulo los valores de la clave fav_movies mediante un input
user_1["fav_movies"].append(fav_movie_2)   #manipulo los valores de la clave fav_movies mediante un input

print("################################################")

print(f"{user_1['name']}, tus peliculas fav son: {user_1['fav_movies'][2]} y {user_1['fav_movies'][3]}.") #aqui imprimo un texto formateado que incluye el valor de la posición 2 de la lista fav_movies que seria fav_movie_1, y luego la posicion 3 que es fav_movie_2, ya que el orden de la lista es: batman, superman,  fav_movie_1 , fav_movie_2. 

#ahora puedo por ejemplo crear un nuevo usuario, y lo que haré será imprimir solo los nombres del usuario 1 y 2.

user_2 = {                      # Tipo de variable / Estructura de datos
    "name": "Pedro",                   #str
    "last_name": "Perez",         #str
    "age": 21,                      #int
    "email": "pedro@gmail.com",                 #string
    "password": "4214",           #string
    "pay": False,                   #bool
    "fav_movies": []                #list (estructura de datos)
}

print("####################################################################")

print("Ahora voy a mostrar solo los nombres de los usuarios registrados")
#imprimo solo los nombres de los usuarios.
print(f"{user["name"]}, {user_1["name"]} y {user_2['name']}")

print("#####################################################################")

print("Fin del programa")



