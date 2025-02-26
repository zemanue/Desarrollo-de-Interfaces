document.addEventListener("DOMContentLoaded", function () {

    // Crear una petición para obtener los datos del archivo JSON
    let peticion = new XMLHttpRequest()
    peticion.open('GET', 'coches.json', true)

    // onreadystatechange se ejecuta cada vez que cambia el estado de la petición
    peticion.onreadystatechange = function () {
        // Comprobar si la petición se completó correctamente
        if (peticion.readyState === 4 && peticion.status === 200) {
            let datosCoches = JSON.parse(peticion.responseText); // Convertir la respuesta JSON de string a objeto

            // Crear un section
            let section = document.createElement('section')
            section.id = 'seccionCoches'
            document.body.appendChild(section)

            // Bucle para recorrer datosCoches e introducir los datos en el HTML
            datosCoches.forEach(coche => {
                let div = document.createElement("div")
                section.appendChild(div)

                // Imagen del coche
                let img = document.createElement("img")
                img.src = coche.foto
                img.alt = `${coche.marca} ${coche.modelo}`
                div.appendChild(img)

                // Información del coche
                let ul = document.createElement("ul")
                div.appendChild(ul)

                // Map con los títulos y los valores de cada propiedad del coche
                let propiedades = new Map([
                    ["Marca", coche.marca],
                    ["Modelo", coche.modelo],
                    ["Kilómetros", coche.kilometros],
                    ["Año", coche.anyo],
                    ["Precio", coche.precio],
                    ["Motor", coche.motor],
                    ["Disponible", coche.disponible ? "Si" : "No"]
                ])

                // Bucle que va añadiendo cada propiedad     del coche a la lista
                propiedades.forEach((valor, titulo) => {
                    // Se crea un li con el título y la propiedad del coche
                    let li = document.createElement("li")
                    li.innerHTML = `<strong>${titulo}</strong>: ${valor}`
                    ul.appendChild(li)
                })

            })
        } else if (peticion.readyState === 4) {
            console.error('Error al cargar el archivo JSON:', peticion.statusText);
        }
    }

    peticion.send()
})