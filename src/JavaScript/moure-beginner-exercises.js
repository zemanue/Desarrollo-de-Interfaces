// 1. Escribe un comentario en una línea

// Comentario en una línea

// 2. Escribe un comentario en varias líneas

/* 
Comentario
en varias
líneas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
// Cadena de texto --> string
let nombre = "Manu"
// Número entero o decimal --> number
let edad = 27
let altura = 1.73
// Booleano --> boolean
let esEstudiante = true
// Indefinido --> undefined
let indefinido
// Nulo --> null
let nulo = null
// Símbolo --> symbol (valores únicos e inmutables)
let simbolo = Symbol("simbolo")
// Gran entero --> bigint (enteros mayores que 2^53 - 1)
let granEntero = 9007199254740991n

// 4. Imprime por consola el valor de todas las variables
console.log("Valor de las variables:")
console.log(nombre)
console.log(edad)
console.log(altura)
console.log(esEstudiante)
console.log(indefinido)
console.log(nulo)
console.log(simbolo)
console.log(granEntero)

// 5. Imprime por consola el tipo de todas las variables
console.log("Tipo de las variables:")
console.log(typeof nombre)
console.log(typeof edad)
console.log(typeof altura)
console.log(typeof esEstudiante)
console.log(typeof indefinido)
console.log(typeof nulo)
console.log(typeof simbolo)
console.log(typeof granEntero)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
nombre = "Paco"
edad = 52
altura = 1.80
esEstudiante = false
// indefinido se mantiene igual
// nulo se mantiene igual
simbolo = Symbol("otro simbolo")
granEntero = 1007199254740992n
console.log("Nuevos valores de las variables:")
console.log(nombre)
console.log(edad)
console.log(altura)
console.log(esEstudiante)
console.log(indefinido)
console.log(nulo)
console.log(simbolo)
console.log(granEntero)

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
nombre = Symbol("Luis")
edad = "veinticinco"
altura = null
esEstudiante = 1
indefinido = 4.5
nulo = false
simbolo = 2307199254740991n
granEntero = undefined
console.log("Nuevos valores de distinto tipo:")
console.log(nombre)
console.log(edad)
console.log(altura)
console.log(esEstudiante)
console.log(indefinido)
console.log(nulo)
console.log(simbolo)
console.log(granEntero)

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos


// 9. A continuación, modifica los valores de las constantes


// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

