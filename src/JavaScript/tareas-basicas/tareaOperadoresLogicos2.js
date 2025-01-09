// 2. Se pide por pantalla un número entero
//      a. Se comprueba que es un número positivo y distinto de 0
//          i. Si además es de dos cifras, se muestra si es par o impar
//          ii. Si es de tres cifras, se muestra el resto de dividir este número entre 2
//          iii. Si no se cumplen las condiciones, aparece un mensaje de error

let valor1 = window.prompt("Introduce un número entero")
valor1 = parseInt(valor1)

if(isNaN(valor1)){
    document.write(`Debes escribir un número entero.
        Recarga la página para volver a intentarlo.`)
} else if (valor1 <= 0) {
    document.write(`El número ${valor1} no es válido (debe ser mayor que 0).
        Recarga la página para volver a intentarlo.`)
} else {
    if (valor1 > 9 && valor1 < 100) {
        if (valor1 % 2 === 0) {
            document.write(`El número ${valor1} es par`)
        } else {
            document.write(`El número ${valor1} es impar`)
        }
    } else if (valor1 > 99 && valor1 < 1000) {
        document.write(`El resto de dividir ${valor1} entre 2 es ${valor1 % 2}`)
    } else {
        document.write(`El número ${valor1} no es válido (debe tener dos o tres cifras).`)
    }
}