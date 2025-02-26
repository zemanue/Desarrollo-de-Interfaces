document.addEventListener("DOMContentLoaded", function () {

    // Crear una petición para obtener los datos del archivo JSON
    let peticion = new XMLHttpRequest()
    peticion.open('GET', 'coches.json', true)

    // onreadystatechange se ejecuta cada vez que cambia el estado de la petición
    peticion.onreadystatechange = function () {
        // Comprobar si la petición se completó correctamente
        if (peticion.readyState === 4 && peticion.status === 200) {
            let datosCoches = JSON.parse(peticion.responseText) // Convertir la respuesta JSON de string a objeto

            // Crear un section
            let section = document.createElement('section')
            section.id = 'seccionCoches'
            document.body.appendChild(section)

            // Bucle para recorrer datosCoches y crear objetos Coche
            datosCoches.forEach(cocheData => {
                let coche = new Coche(
                    cocheData.marca,
                    cocheData.modelo,
                    cocheData.kilometros,
                    cocheData.anyo,
                    cocheData.precio,
                    cocheData.motor,
                    cocheData.foto,
                    cocheData.disponible
                )

                // Añadir al section el div generado por el método mostrarDatos de Coche.js
                section.appendChild(coche.mostrarDatos())
            })
        } else if (peticion.readyState === 4) {
            console.error('Error al cargar el archivo JSON:', peticion.statusText);
        }
    }

    peticion.send()
})