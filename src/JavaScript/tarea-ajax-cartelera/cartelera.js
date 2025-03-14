document.addEventListener('DOMContentLoaded', function () {

    // Crear la petición asincrónica para obtener los datos de peliculas.xml
    let peticion = new XMLHttpRequest()
    peticion.open("GET", "peliculas.xml", true)
    peticion.responseType = "document"
    peticion.send()

    peticion.onload = function () {
        if (peticion.status === 200) {
            console.log("Petición completada correctamente")
            let datosPeliculasXML = peticion.response 
            console.log(datosPeliculasXML)
            let peliculas = datosPeliculasXML.querySelectorAll("pelicula")

            let peliculasDisponibles = document.getElementById("peliculasDisponibles")

            peliculas.forEach(pelicula => {
                let cartel = pelicula.querySelector("cartel").textContent
                let titulo = pelicula.querySelector("titulo").textContent

                let divPelicula = document.createElement("div")
                divPelicula.classList.add("pelicula")
                divPelicula.innerHTML = `
                    <img src="${cartel}" alt="${titulo}">
                    <h5>${titulo}</h5>
                `
                peliculasDisponibles.appendChild(divPelicula)
                console.log(`Película añadida: ${titulo}`)
            })

            // peliculas.forEach(pelicula => {
            //     let titulo = pelicula.querySelector("titulo").textContent
            //     let poster = pelicula.querySelector("poster").textContent
            //     let pelicula = new Pelicula(titulo, poster)
            //     section.appendChild(pelicula.mostrarDatos())
            // })
        } else {
            alert("Error al cargar el archivo XML:", peticion.statusText)
        }
    }


    // let insertarPosterYTitulo = () => {
    //     let divPelicula = document.createElement("div")
    //     divPelicula.classList.add("pelicula")
    //     divPelicula.innerHTML = `
    //         <img src="${pelicula.poster_path}" alt="${pelicula.title}">
    //         <h3>${pelicula.title}</h3>
    //     `
    // }
})


