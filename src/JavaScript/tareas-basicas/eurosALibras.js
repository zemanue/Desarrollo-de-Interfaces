
// Se pide por pantalla mediante una ventana de tipo prompt, el importe en Euros. Se imprime
// en el documento la equivalencia en libras.

let eurosALibras = (euros) => (euros * 0.87)

let euros = 0
euros = window.prompt("Escribe una cantidad en euros para convertirla a libras: ")
let libras = eurosALibras(euros)

if (isNaN(euros) || euros === "" || euros === null) {
    document.write(`Debes escribir un número (recuerda que si es decimal, debes escribirlo con '.' y no ',').
        Recarga la página para volver a intentarlo.`)
} else {
    document.write(`${euros} euros son: ${libras} libras.`)
}


