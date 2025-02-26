document.addEventListener("DOMContentLoaded", function () {
    
        // Crear una petición para obtener los datos del archivo JSON
        let peticion = new XMLHttpRequest()
        peticion.open('GET', 'coches.json', true)
    
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

                    
                })
            } else if (peticion.readyState === 4) {
                console.error('Error al cargar el archivo JSON:', peticion.statusText);
            }
        }

        peticion.send()
})