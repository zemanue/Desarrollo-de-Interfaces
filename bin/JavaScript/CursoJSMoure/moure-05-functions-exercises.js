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
console.log(`¿El número ${numero} es primo? ${esPrimo(numero)}`)


// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
function elementosComunesEntreArrays(array1, array2) {
    let arrayElementosComunes = []
    array1.forEach(element1 => {
        array2.forEach(element2 => {
            if (element1 === element2) {
                arrayElementosComunes.push(element1)
            }
        });
    });
    return arrayElementosComunes
}

array1 = [12, 53, 71, 1, 32, 83, 23, 88, 44, 8]
array2 = [1, 7, 21, 32, 88, 4, 10, 9, 4, 54, 10, 12]
array3 = elementosComunesEntreArrays(array1, array2)
console.log("Los elementos comunes entre array1 y array2 son: " + array3)

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
let sumaDePares = (arrayNum) => {
    let sumaDePares = 0
    for (const num of arrayNum) {
        if (num % 2 == 0) {
            sumaDePares += num
        }
    }
    return sumaDePares
}

console.log("La suma de los números pares del 1 al 10 es: " + sumaDePares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
let elevarAlCuadrado = arrayNum => arrayNum.map(num => num ** 2)
console.log("Array de números del 1 al 10 al cuadrado: " + elevarAlCuadrado([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
let invertirTexto = (texto) => texto.split(" ").reverse().join(" ") //split() separa el texto en palabras, 
                                                                    // reverse() invierte el orden de las palabras 
                                                                    // y join() las vuelve a unir
console.log("Texto invertido: " + invertirTexto("Hola Mundo soy Manu"))

// 10. Crea una función que calcule el factorial de un número dado
let factorial = (num) => {
    let factorial = 1
    for (let i = 1; i <= num; i++) {
        factorial *= i
    }
    return factorial
}
console.log("Factorial de 5: " + factorial(5))
