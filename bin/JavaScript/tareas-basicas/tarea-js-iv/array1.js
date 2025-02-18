/*
1. Diseña el siguiente programa:
- Se pide por pantalla el número de celdas de la tabla o Array
- Si hay 10 celdas, cada celda guarda el número correspondiente a su posición.
- Imprimir el array con un bucle for
- Imprimir el array con un bucle while
*/

let numeroDeCeldas = parseInt(window.prompt("Introduce el número de celdas: "))

if (numeroDeCeldas == null || numeroDeCeldas == "" || isNaN(numeroDeCeldas)) {
    console.log("No has introducido ningún número. Recarga para volver a introducirlo")
} else {
    let array = []
    for (let i = 0; i < numeroDeCeldas; i++) {
        array[i] = i
    }

    console.log("Imprimiendo con bucle for: ")
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
    
    console.log("Imprimiendo con bucle while: ")
    let i = 0
    while (i < array.length) {
        console.log(array[i])
        i++
    }
}

