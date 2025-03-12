document.addEventListener("DOMContentLoaded", function () {

    // Crear una petición para obtener los datos del archivo JSON
    let peticion = new XMLHttpRequest()
    peticion.open('GET', 'coches.json', true) // Configurar la petición: obtener datos (GET) del archivo coches.json de forma asíncrona (true)
    peticion.responseType = 'json' // Indicar que la respuesta es JSON
    peticion.send() 

    // onreadystatechange se ejecuta cada vez que cambia el estado de la petición
    peticion.onload = function () {
        // Comprobar si la petición se completó correctamente
        if (peticion.status === 200) {
            let datosCoches = peticion.response // Obtener la respuesta JSON

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
        } else {
            alert('Error al cargar el archivo JSON:', peticion.statusText)
        }
    }

    peticion.onerror = function () {
        alert('Error al cargar el archivo JSON:', peticion.statusText);
    }

})