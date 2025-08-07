
numeros = range(1, 151)

for numero in numeros:
    if numero % 3 == 0 and numero % 5 == 0 and numero % 7 == 0:
        print("FizzBuzzPaff")
    elif numero % 3 == 0 and numero % 5 == 0:
        print("FizzBuzz")
    elif numero % 3 == 0 and numero % 7 == 0:
        print("FizzPaff")
    elif numero % 5 == 0 and numero % 7 == 0:
        print("BuzzPaff")
    elif numero % 3 == 0:
        print ("Fizz")
    elif numero % 5 == 0:
        print("Buzz")
    elif numero % 7 == 0:
        print("Paff")
    else:
        print(numero)