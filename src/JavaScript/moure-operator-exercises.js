
// 1. Crea una variable para cada operación aritmética
let suma = 10 + 3
let resta = 10 - 3
let multiplicacion = 10 * 3
let division = 10 / 3
let modulo = 10 % 3
let exponente = 10 ** 3
let incremento = 0
incremento++
let decremento = 0
decremento--
console.log("OPERADORES ARITMÉTICOS:")
console.log(suma)
console.log(resta)
console.log(multiplicacion)
console.log(division)
console.log(modulo)
console.log(exponente)
console.log(incremento)
console.log(decremento)

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
suma = 10
suma += 3
resta -= 3
multiplicacion *= 3
division /= 3
modulo %= 3
exponente **= 3
console.log("Valor de las variables usando OPERADORES DE ASIGNACIÓN:")
console.log(suma)
console.log(resta)
console.log(multiplicacion)
console.log(division)
console.log(modulo)
console.log(exponente)
console.log(incremento)
console.log(decremento)

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log("Comparaciones verdaderas:")
console.log(50 > 10)
console.log(50 < 100)
console.log(50 >= 50)
console.log(50 <= 50)
console.log(50 == "50")
console.log(50 === 50)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log("Comparaciones falsas:")
console.log(0 > 1)
console.log(3 < 3)
console.log(10 >= 12)
console.log(50 <= 9)
console.log(50 == 9)
console.log(50 === "50")

// 5. Utiliza el operador lógico and
console.log("Operador lógico and:")
console.log(true && false)

// 6. Utiliza el operador lógico or
console.log("Operador lógico or:")
console.log(true || false)

// 7. Combina ambos operadores lógicos
console.log("Operadores lógicos combinados:")
console.log(false && false || true)

// 8. Añade alguna negación
console.log("Operador lógico not")
console.log(!true)

// 9. Utiliza el operador ternario
console.log("Operador ternario:")
let estaLloviendo = true
let mensaje = estaLloviendo ? "Lleva paraguas" : "No hace falta paraguas"
console.log(mensaje)

// 10. Combina operadores aritméticos, de comparáción y lógicas

