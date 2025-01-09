
// 1. Se pide por pantalla el nombre y el número de veces que se desea imprimir.
// Si no introduce ningún valor, se pregunta de nuevo
let nombre
do {
    nombre = prompt("Introduce tu nombre: ")
    if (!nombre) {
        alert("Debes introducir un nombre")
    }
} while (!nombre)

let veces 
do {
        veces = prompt("¿Cuántas veces deseas imprimir tu nombre?")
    veces = parseInt(veces)
    if (isNaN(veces) || veces <= 0) {
        alert("Debes introducir un número entero mayor que 0")
    }
} while (isNaN(veces) || veces <= 0)

document.writeln(`Nombre: ${nombre}<br>`)
document.writeln(`Veces repetido: ${veces}<br>`)
for (let i = 0; i < veces; i++) {
    document.writeln(`${nombre}<br>`)
}

// 2. Imprimir los números del 1-100, en intervalos de 10 en 10.
for (let i = 1; i <= 100; i += 10) {
    document.writeln(`${i} `)
}

// 3. Se pide por pantalla el número de celdas y de filas de la tabla. Posteriormente, se crea con esas dimensiones.
let numFilas = prompt("Ingrese el número de filas:")
numFilas = parseInt(numFilas)
if (isNaN(numFilas) || numFilas <= 0) {
    alert("Número de filas inválido")
    numFilas = 1
}
let numColumnas = prompt("Ingrese el número de columnas:")
numColumnas = parseInt(numColumnas)
if (isNaN(numColumnas) || numColumnas <= 0) {
    alert("Número de columnas inválido")
    numColumnas = 1
}

let tabla = document.createElement('table')

for (let i = 0; i < numFilas; i++) {
    let fila = document.createElement('tr')
    for (let j = 0; j < numColumnas; j++) {
        let celda = document.createElement('td')
        celda.textContent = `${i}, ${j}`
        fila.appendChild(celda)
    }
    tabla.appendChild(fila)
}

document.body.appendChild(tabla)
