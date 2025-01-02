// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
function sumarDosNumeros(a, b) {
    return a + b
}

let a = 5, b = 3
console.log(`Suma de ${a} + ${b} = ${sumarDosNumeros(a, b)}`)

let sumarDosNumeros2 = (a, b) => a + b
console.log(`Suma de ${a} + ${b} = ${sumarDosNumeros2(a, b)}`)

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
let mayorNumeroDeArray = (arrayDeNumeros) => Math.max(...arrayDeNumeros)

arrayDeNumeros = [12, 53, 71, 1, 32, 83, 23, 88, 44, 8]
console.log("Mayor número del array: " + mayorNumeroDeArray(arrayDeNumeros))

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
let contarVocales = function (string) {
    let vocales = 0
    for (const letra of string) {
        if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
            vocales++
        }
    }
    return vocales
}
let texto = "Ejemplo de texto"
console.log(`Vocales dentro de "${texto}": ${contarVocales(texto)}`)

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
function arrayDeStringsAMayusculas(arrayDeStrings) {
    let textoAMayusculas = arrayDeStrings.map(string => string.toUpperCase()) //map() recorre cada string del array y ejecuta la función de pasarlo a mayúsculas
    return textoAMayusculas
}

let arrayDeStrings = ["Hola", "Mundo", "soy", "Manu"]
console.log("Array de strings: " + arrayDeStrings)
console.log("Array pasado a mayúsculas: " + arrayDeStringsAMayusculas(arrayDeStrings))


// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
let esPrimo = (number) => {
    if (number < 2) {
        return false
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false
        }
    }
    return true
}

let numero = 97
console.log(`El número ${numero} es primo: ${esPrimo(numero)}`)


// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos


// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares


// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado


// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso


// 10. Crea una función que calcule el factorial de un número dado

