# ESTRUCTURA DE DATOS 
# Incluir diferentes tipos de variables y hacer una lista.

print("Bienvenide a Lider compre aqui")
name = input("Ingrese su nombre: ")
last_name = input("Ingrese su apellido: ")
print(f"Bienvenide, {name} {last_name}")
print("¿Qué vas a comprar hoy?")
carrito = []

frutas = input("¿Que frutas vas a comprar?")
verduras = input("¿Que verduras vas a comprar?")
lacteos = input("¿Que lácteos vas a comprar?")

carrito.append(frutas)
carrito.append(verduras)
carrito.append(lacteos)

print(f"{name} este es tu carrito: {carrito}, deseas continuar con la compra?")

