document.addEventListener("DOMContentLoaded", function () {
    
    // Preparar los arrays de imágenes, enlaces y texto de los enlaces
    let images = ["imgs/googleplex.jpg", "imgs/microsoft-building.jpg", "imgs/apple-park.jpg"]
    
    let links = ["https://es.wikipedia.org/wiki/Google", "https://es.wikipedia.org/wiki/Microsoft", "https://es.wikipedia.org/wiki/Apple"]

    let textoLinks = ["Google", "Microsoft", "Apple"]

    // Crear la tabla
    let tabla = document.createElement("table")
    document.body.appendChild(tabla)

    // BUCLE FOR: para crear las 2 filas
    for (let i = 0; i < 2; i++) {
        let fila = document.createElement("tr")
        tabla.appendChild(fila)

        // Segundo bucle for: para crear las 3 celdas de cada fila
        for (let j = 0; j < images.length; j++) {
            let celda = document.createElement("td")
            fila.appendChild(celda)

            // Si es la primera fila, añadir imagen
            if (i == 0){
                let img = document.createElement("img")
                img.setAttribute("src", images[j])
                celda.appendChild(img)
            } 
            // Si no, añadir enlace
            else {
                let enlace = document.createElement("a")
                enlace.setAttribute("href", links[j])
                enlace.textContent = textoLinks[j]
                celda.appendChild(enlace)
            }
        }
    }
})