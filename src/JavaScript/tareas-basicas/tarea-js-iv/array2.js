/*
2.Diseñar un array, con 5 imágenes. Se pregunta al usuario, cual desea imprimir, una vez que
se teclea el nombre de la imagen, aparece en el documento. 
*/

let imagenes = ["moneras.jpg", "protistas.jpg", "hongos.jpg", "plantas.jpg", "animales.jpg"]

let imagen = prompt("Escribe el nombre de la imagen que deseas ver: moneras, protistas, hongos, plantas, animales")
imagen = (imagen === null) ? "" : imagen
imagen = imagen.toLowerCase() + ".jpg"

if (imagenes.includes(imagen)) {
    let h1 = document.createElement("h1")
    h1.textContent = "Imagen seleccionada: " + imagen
    document.body.appendChild(h1)
    
    let img = document.createElement("img")
    img.src = imagen
    // Que todas las imágenes tengan la misma altura, pero que se mantenga la proporción
    img.style.height = "300px"
    img.style.width = "auto"

    document.body.appendChild(img)
} else {
    let h3 = document.createElement("h3")
    h3.textContent = `La imagen no existe :(. 
    Las imágenes disponibles son: moneras, protistas, hongos, plantas, animales.
    Recarga la página e inténtalo de nuevo.`
    document.body.appendChild(h3)
}

