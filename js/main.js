// con funciones normales

function entrada(){
    num1 = parseInt(prompt("ingrese numero 1"))
    num2 = parseInt(prompt("ingrese numero 2"))
    return {num1, num2}
}

// function procesar(numeros){
//     return numeros.num1 + numeros.num2
// }

// function salida(salida){
//     console.log(salida)
// }

// con funciones arrow

const procesar = numeros => numeros.num1 + numeros.num2
const salida = salida => console.log(salida)

//salida(procesar(entrada())) // aparentemente esta naziada que se me ocurrió primero funciona

// igual hice uno de una forma mas "normal" o lo "normal" es lo primero, no c
// let variable = entrada()
// variable = procesar (variable)
// parseInt(variable) // edit 2 recien me doy cuenta (tipo 4 min) de que ya lo había hecho antes, el pasado siempre me gana
// salida(variable)