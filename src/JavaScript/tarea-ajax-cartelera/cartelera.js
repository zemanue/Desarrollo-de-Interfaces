document.addEventListener('DOMContentLoaded', function () {

    // Crear la petición asincrónica para obtener los datos de peliculas.xml
    let xhr = new XMLHttpRequest()
    xhr.open("GET", "peliculas.xml", true)
    xhr.responseType = "document" // Indica que la respuesta es un documento XML
    xhr.send()

    // Cuando la petición se completa, se ejecuta la función onload
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
        if (!peliculasXML) {
            console.error("El documento XML no se ha cargado correctamente.")
            return
        }
        let peliculas = peliculasXML.querySelectorAll("pelicula")
        if (peliculas.length === 0) {
            console.error("No se encontraron elementos 'pelicula' en el documento XML.")
            return
        }
        peliculas.forEach(pelicula => {
            pelicula = {
                titulo: pelicula.querySelector("titulo").textContent,
                direccion: pelicula.querySelector("direccion").textContent,
                duracion: pelicula.querySelector("duracion").textContent,
                nacionalidad: pelicula.querySelector("nacionalidad").textContent,
                actores: pelicula.querySelector("actores").textContent,
                genero: pelicula.querySelector("genero").textContent,
                sinopsis: pelicula.querySelector("sinopsis").textContent,
                cartel: pelicula.querySelector("cartel").textContent,
                trailerSrc: pelicula.querySelector("src").textContent,
                trailerTitle: pelicula.querySelector("title").textContent
            }
            agregarPelicula(pelicula)
        })
    }

    /**
     * Agrega una película a la sección de películas disponibles
     * @param {Object} pelicula - Objeto con los datos de la película
     */
    function agregarPelicula(pelicula) {
        let divPelicula = document.createElement("div")
        divPelicula.classList.add("pelicula")
        divPelicula.innerHTML = `
            <img src="${pelicula.cartel}" alt="${pelicula.titulo}">
            <h5>${pelicula.titulo}</h5>`
        let peliculasDisponibles = document.getElementById("peliculasDisponibles")
        peliculasDisponibles.appendChild(divPelicula)
        console.log(`Película añadida: ${pelicula.titulo}`)

        // Configurar el evento click
        divPelicula.addEventListener("click", function () {
            mostrarInfoPelicula(pelicula)
        })
    }

    /**
     * Muestra la información de la película en su sección correspondiente
     * @param {Object} pelicula - Objeto con los datos de la película
     */
    function mostrarInfoPelicula(pelicula) {
        let peliculaSeleccionada = document.querySelector("#peliculaSeleccionada")
        peliculaSeleccionada.innerHTML = `
            <h2>${pelicula.titulo}</h2>
            <iframe id="trailer" width="425" height="240" src="${pelicula.trailerSrc}"
            title="${pelicula.trailerTitle}" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <ul id="info">
            <li id="direccion"><strong>Dirección:</strong> ${pelicula.direccion}</li>
            <li id="duracion"><strong>Duración:</strong> ${pelicula.duracion} min.</li>
            <li id="nacionalidad"><strong>Nacionalidad:</strong> ${pelicula.nacionalidad}</li>
            <li id="actores"><strong>Actores:</strong> ${pelicula.actores}</li>
            <li id="genero"><strong>Género:</strong> ${pelicula.genero}</li>
            <li id="sinopsis"><strong>Sinopsis:</strong> ${pelicula.sinopsis}</li>
            </ul>
        `
    }


})
