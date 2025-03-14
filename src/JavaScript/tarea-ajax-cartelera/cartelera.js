document.addEventListener('DOMContentLoaded', function () {

    // Crear la petición asincrónica para obtener los datos de peliculas.xml
    let xhr = new XMLHttpRequest()
    xhr.open("GET", "peliculas.xml", true)
    xhr.responseType = "document" // Indica que la respuesta es un documento XML
    xhr.send()

    // Configurando onload en lugar de onreadystatechange podemos omitir la comprobación de "readyState === 4"
    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log("Petición completada correctamente")
            let peliculasXML = xhr.response
            console.log(peliculasXML)

            mostrarPeliculas(peliculasXML)

        } else {
            console.error("Error al cargar el archivo XML:", xhr.statusText)
        }
    }

    xhr.onerror = function () {
        console.error("Error al cargar el archivo XML:", xhr.statusText)
    }

    /**
     * Muestra las películas disponibles
     * @param {Document} peliculasXML - Documento XML con los datos de las películas
     */
    function mostrarPeliculas(peliculasXML) {
        let peliculas = peliculasXML.querySelectorAll("pelicula")
        peliculas.forEach(pelicula => {
            let cartel = pelicula.querySelector("cartel").textContent
            let titulo = pelicula.querySelector("titulo").textContent
            agregarPelicula(titulo, cartel)
        })
    }

    /**
     * Agrega una película al DOM
     * @param {string} titulo - Título de la película
     * @param {string} cartel - URL del cartel de la película
     */
    function agregarPelicula(titulo, cartel) {
        let divPelicula = document.createElement("div")
        divPelicula.classList.add("pelicula")
        divPelicula.innerHTML = `
            <img src="${cartel}" alt="${titulo}">
            <h5>${titulo}</h5>`
        let peliculasDisponibles = document.getElementById("peliculasDisponibles")
        peliculasDisponibles.appendChild(divPelicula)
        console.log(`Película añadida: ${titulo}`)
    }
})
