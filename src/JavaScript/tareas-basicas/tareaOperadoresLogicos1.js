// 1. Realizar con el operador not (!): 
// Pedir un número por pantalla, y comprobar que es distinto de 0 y mayor que 0
//      a. Si se cumple la condición, se calcula si el número es par o impar
//      b. Si no se cumple la condición, se muestra un mensaje de error

let valor1 = window.prompt("Introduce un número entero")
valor1 = parseInt(valor1)

if (isNaN(valor1)) {
    document.write(`Debes escribir un número entero.
        Recarga la página para volver a intentarlo.`)
}
else if (valor1 !== 0 && valor1 > 0) {
    if (valor1 % 2 === 0) {
        document.write(`El número ${valor1} es par`)
    } else {
        document.write(`El número ${valor1} es impar`)
    }
} else {
    document.write(`El número ${valor1} no es válido (debe ser mayor que 0).
        Recarga la página para volver a intentarlo.`)
}
