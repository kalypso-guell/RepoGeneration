// MÓDULOS

export const listaNombres = ["Luis", "Daniela", "Alberto", "Karla", "Laura"]

function suma() {
    return 2 + 2
}

export function resta() {
    return 2 - 2
}
export default suma

// ¿COMO LO MODULARIZO? con CommonJS

// module.exports = listaNombres // esto permite que pueda exportar la constante listaNombres

// si queremos exportar más código, exportamos un objeto y sería así

// module.exports = {listaNombres, suma, resta}

//EcmaJS

// export { listaNombres, suma , resta} // a nivel de sintaxis es más simple


// "export default" podemos hacer solo una exportacion default