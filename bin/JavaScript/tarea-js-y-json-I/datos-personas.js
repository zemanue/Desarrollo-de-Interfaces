document.addEventListener('DOMContentLoaded', function () {
    
    const datosPersonas = JSON.parse(`[
        {
            "nombre": "Claudia",
            "apellido": "Pérez",
            "edad": 29,
            "curso": "1 DAM",
            "modalidad": "Online",
            "foto": "mujer1.jpg"
        },
        {
            "nombre": "Manuel",
            "apellido": "Gámez",
            "edad": 31,
            "curso": "2 DAM",
            "modalidad": "Online",
            "foto": "hombre1.jpg"
        },
        {
            "nombre": "María",
            "apellido": "García",
            "edad": 34,
            "curso": "2 DAM",
            "modalidad": "Online",
            "foto": "mujer2.jpg"
        },
        {
            "nombre": "Javier",
            "apellido": "Blanco",
            "edad": 22,
            "curso": "1 DAM",
            "modalidad": "Presencial",
            "foto": "hombre2.jpg"
        },
        {
            "nombre": "Laura",
            "apellido": "Pinilla",
            "edad": 20,
            "curso": "1 DAM",
            "modalidad": "Presencial",
            "foto": "mujer3.jpg"
        },
        {
            "nombre": "Carlos",
            "apellido": "Ramírez",
            "edad": 23,
            "curso": "2 DAM",
            "modalidad": "Presencial",
            "foto": "hombre3.jpg"
        }
    ]`)

    
    // Instroducir los datos en el HTML
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


    
    // let peticion = new XMLHttpRequest()
    // peticion.open('GET', 'datos-personas.json')
    // peticion.responseType = 'json'
    // peticion.send()

    // document.write(peticion.readyState + "<br>")
    // document.write(peticion.status + "<br>")

    // if (peticion.readyState == 4 && peticion.status == 200) {
    //     console.log('Petición exitosa')
    //     let datos = peticion.response
    //     let personas = datos.personas
    //     let lista = document.getElementById('lista-personas')
    //     for (let i = 0; i < personas.length; i++) {
    //         let persona = personas[i]
    //         let item = document.createElement('li')
    //         item.textContent = `${persona.nombre} ${persona.apellido} - ${persona.edad} años`
    //         lista.appendChild(item)
    //     }
    // } else {
    //     document.write('Error en la petición')
    // }

})