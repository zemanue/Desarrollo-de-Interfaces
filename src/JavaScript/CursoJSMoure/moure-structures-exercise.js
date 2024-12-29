
// 1. Crea un array que almacene cinco animales
let animalesArray = ["gato", "perro", "ratón", "araña", "loro"]
console.log("Array de animales: " + animalesArray)

// 2. Añade dos más. Uno al principio y otro al final
animalesArray.unshift("caballo")
animalesArray.push("cangrejo")
console.log("Dos elementos añadidos. Resultado: " + animalesArray)

// 3. Elimina el que se encuentra en tercera posición
console.log("Elemento eliminado: " + animalesArray.splice(2, 1))
console.log("Resultado: " + animalesArray)

// 4. Crea un set que almacene cinco libros
let librosSet = new Set(["El Quijote", "1984", "El Señor de los Anillos", "El Resplandor", "Drácula"])
console.log("Set de libros: ")
console.log(librosSet)

// 5. Añade dos más. Uno de ellos repetido
librosSet.add("El Perfume")
librosSet.add("El Quijote")
console.log("Dos elementos añadidos. Resultado: ")
console.log(librosSet)

// 6. Elimina uno concreto a tu elección
librosSet.delete("El Señor de los Anillos")
console.log("Un elemento eliminado. Resultado: ")
console.log(librosSet)

// 7. Crea un mapa que asocie el número del mes a su nombre

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

// 9. Añade al mapa una clave con un array que almacene los meses de verano

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map