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

                // Arrays con los títulos y los valores de cada propiedad del coche
                let titulos = ["Marca", "Modelo", "Kilómetros", "Año", "Precio", "Motor", "Foto", "Disponible"]
                let valores = Object.values(coche) 

                // Bucle que va añadiendo cada propiedad del coche a la lista
                for (let i = 0; i < titulos.length; i++) {
                    // La información de la foto no se añade
                    if (titulos[i] === "Foto") {
                        continue
                    }

                    // Se crea un li con el título y la propiedad del coche
                    let li = document.createElement("li")
                    li.innerHTML = `<strong>${titulos[i]}</strong>: ${valores[i]}`
                    ul.appendChild(li)
                }

            })
        } else if (peticion.readyState === 4) {
            console.error('Error al cargar el archivo JSON:', peticion.statusText);
        }
    }

    peticion.send()
})