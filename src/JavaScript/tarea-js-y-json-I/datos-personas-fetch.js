document.addEventListener('DOMContentLoaded', function () {
    // Misma funcionalidad que datos-personas.js, pero con Fetch API (más moderna y sencilla)
    fetch('datos-personas.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el archivo JSON')
            }
            return response.json() // Convertir a objeto JSON
        })
        .then(datosPersonas => {
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
        })
        .catch(error => {
            console.error('Hubo un problema con la carga del archivo JSON:', error)
        })
})
