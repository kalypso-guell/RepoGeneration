import { validateRUT, getCheckDigit, generateRandomRUT } from 'validar-rut'

const rut = generateRandomRUT(1)

console.log(rut)

const validar = validateRUT(rut)

console.log(validar)