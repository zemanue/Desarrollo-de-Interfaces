document.addEventListener('DOMContentLoaded', function () {

    // Crear una petición para obtener los datos del archivo JSON
    let peticion = new XMLHttpRequest()
    peticion.open('GET', 'datos-personas.json', true)

    peticion.onreadystatechange = function () {
        // Comprobar si la petición se completó correctamente
        if (peticion.readyState === 4 && peticion.status === 200) {
            let datosPersonas = JSON.parse(peticion.responseText); // Convertir la respuesta JSON de string a objeto


            // Introducir los datos en el HTML
            for (let i = 0; i < datosPersonas.length; i++) {
                let seccionPersonas = document.getElementById('seccionPersonas')

                let div = document.createElement('div')

                let persona = datosPersonas[i]

                let img = document.createElement('img')
                img.src = persona.foto
                img.alt = `${persona.nombre} ${persona.apellido}`

                let listaInfo = document.createElement('ul')

                let infoPersona = document.createElement('li')
                infoPersona.innerHTML = `Nombre: <span class="resaltado">${persona.nombre}</span>`

                let apellido = document.createElement('li')
                apellido.innerHTML = `Apellido: <span class="resaltado">${persona.apellido}</span>`

                let edad = document.createElement('li')
                edad.innerHTML = `Edad: <span class="resaltado">${persona.edad}</span>`

                let curso = document.createElement('li')
                curso.innerHTML = `Curso: <span class="resaltado">${persona.curso}</span>`

                let modalidad = document.createElement('li')
                modalidad.innerHTML = `Modalidad: <span class="resaltado">${persona.modalidad}</span>`

                listaInfo.append(infoPersona, apellido, edad, curso, modalidad)
                div.append(img, listaInfo)
                seccionPersonas.appendChild(div)
            }
        } else if (peticion.readyState === 4) {
            console.error('Error al cargar el archivo JSON:', peticion.statusText);
        }
    }

    peticion.send()
    })