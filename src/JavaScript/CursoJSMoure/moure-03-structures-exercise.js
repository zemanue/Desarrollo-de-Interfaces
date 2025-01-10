
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
let mesesMap = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
])
console.log("Map de meses: ")
for (const [numero, mes] of mesesMap) {
    console.log(numero + ": " + mes)
}

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
let numeroMes = 5
if (mesesMap.has(numeroMes)) {
    console.log(`El mes número ${numeroMes} es ${mesesMap.get(numeroMes)}`)
} else {
    console.log(`El mes número ${numeroMes} no existe en el map`)
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano
mesesMap.set("Invierno", ["Diciembre", "Enero", "Febrero"])
mesesMap.set("Primavera", ["Marzo", "Abril", "Mayo"])
mesesMap.set("Verano", ["Junio", "Julio", "Agosto"])
mesesMap.set("Otoño", ["Septiembre", "Octubre", "Noviembre"]) 
console.log("Estaciones con sus meses añadidas al map: ")
for (const [clave, valor] of mesesMap) {
    if (typeof clave !== "number") {
        console.log(clave + ": " + valor)
    }
}

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let nombresArray = ["Manu", "Isa", "Raúl", "Dani", "Sara", "Alejandro", "Raúl"]
console.log("Array de nombres: " + nombresArray)

let nombresSet = new Set(nombresArray)
console.log("Conversión a set de nombres: ")
console.log(nombresSet)

let nombresMap = new Map()
let index = 1
for (const nombre of nombresSet) {
    nombresMap.set(index++, nombre)
}
console.log("Conversión a map de nombres: ")
for (const [clave, nombre] of nombresMap) {
    console.log(clave + ": " + nombre)
}