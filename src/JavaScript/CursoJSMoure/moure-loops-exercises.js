
// 1. Crea un bucle que imprima los números del 1 al 20
for (let i = 0; i < 20; i++) {
    console.log(i + 1)    
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let suma = 0
for (let i = 0; i < 100; i++) {
    suma += i + 1
}
console.log(suma)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (let i = 0; i < 50; i++) {
    if ((i + 1) % 2 === 0) {
        console.log(i + 1)    
    }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let nombres = ["Manu", "Isa", "Raúl", "Dani", "Sara", "Alejandro"]
console.log("Nombres: ")
for (const nombre of nombres) {
    console.log(nombre)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let texto = "Hola, me llamo Manu"
console.log("Texto: " + texto)
let vocales = []
for (const letra of texto) {
    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
        vocales.push(letra)
    }
}
console.log(`Hay ${vocales.length} vocales: ${vocales}`)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log("Números: " + numeros)
let producto = 1
for (const numero of numeros) {
    producto *= numero
}
console.log("Producto de los números: " + producto)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
for (let i = 0; i < 10; i++) {
    console.log("5 x " + (i + 1) + " = " + 5 * (i + 1))
}

// 8. Usa un bucle para invertir una cadena de texto
let textoInvertido = ""
for (let i = texto.length - 1; i >= 0; i--) {
    textoInvertido += texto.charAt(i)
}
console.log("Texto invertido: " + textoInvertido)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let fibonacci = [0, 1]
for (let i = 2; i < 10; i++) {
    fibonacci.push(fibonacci[i - 2] + fibonacci[i - 1])
}
console.log("Primeros 10 nums. de secuencia de Fibonacci: " + fibonacci)

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let numeros2 = [30, 21, 1, 432, 64, 12, 6, 9, 11, 4, 10, 92, 8, 23, 77]
console.log("Números: " + numeros2)
let numerosMayores10 = []
for (const numero of numeros2) {
    if (numero > 10) {
        numerosMayores10.push(numero)
    }
}
console.log("Números mayores a 10: " + numerosMayores10)
