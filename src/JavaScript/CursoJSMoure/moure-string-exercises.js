
// 1. Concatena dos cadenas de texto
let nombre = "Manu"
let apellido = "Redondo"
let nombreCompleto = nombre + " " + apellido
console.log("Nombre completo: " + nombreCompleto)

// 2. Muestra la longitud de una cadena de texto
console.log("Longitud de nombre completo: " + nombreCompleto.length)

// 3. Muestra el primer y último carácter de un string
console.log("Primer carácter: " + nombreCompleto.charAt(0))
console.log("Último carácter: " + nombreCompleto.charAt(nombreCompleto.length - 1))

// 4. Convierte a mayúsculas y minúsculas un string
let nombreMayusculas = nombreCompleto.toUpperCase()
console.log("Nombre en mayúsculas: " + nombreMayusculas)
let nombreMinusculas = nombreCompleto.toLowerCase()
console.log("Nombre en minúsculas: " + nombreMinusculas)

// 5. Crea una cadena de texto en varias líneas
let mensajeEnVariasLineas = 
`Mensaje 
en varias
lineas`
console.log(mensajeEnVariasLineas)

// 6. Interpola el valor de una variable en un string
let presentacion = `Hola, mi nombre es ${nombre} ${apellido}`
console.log(presentacion)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let presentacionSinEspacios = presentacion.replaceAll(" ", "-")
console.log(presentacionSinEspacios)

// 8. Comprueba si una cadena de texto contiene una palabra concreta


// 9. Comprueba si dos strings son iguales


// 10. Comprueba si dos strings tienen la misma longitud

