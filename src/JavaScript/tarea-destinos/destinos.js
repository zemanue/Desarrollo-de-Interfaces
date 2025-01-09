/*
    1.Se pregunta por pantalla: ¿Deseas jugar con Javascript? 
    NO-----Mostramos un mensaje: Tu te lo pierdes!!!. (imagen) 
    SI Elige un destino: ¿Francia, España o Portugal? 
        - Si elige Francia: Preguntamos: Paris, Marsella o Lyon 
            • Paris: Aparece un párrafo (loremp) aproximadamente 4 lineas. Tres imágenes de Paris. 
            • Marsella: Aparece un párrafo (loremp) aproximadamente 4 líneas. Tres imágenes de Marsella. 
            • Lyon: Aparece un párrafo (loremp) aproximadamente 4 líneas. Tres imágenes de Lyon.
        - Si elige España: Preguntamos: ¿Playa o montaña? 
            • Playa: Aparece un párrafo (lorem). Tres fotos. 
            • Montaña: Aparece un párrafo (lorem). Dos fotos 
        - Si elige Portugal Preguntamos: ¿Turismo, playa o montaña? 
            • Turismo: Texto y una foto (Lisboa) 
            • Playa: Algarve (texto y dos fotos) 
            • Montaña: Fotos de Nazaret y santuario Fátima
*/
document.addEventListener('DOMContentLoaded', function () {

    const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean arcu dolor, pharetra vel porttitor sed, aliquam vel nisi. Ut nec consectetur nisi. Pellentesque rhoncus metus a metus tempus faucibus. Proin tempor elit elementum dolor congue eleifend. Aliquam euismod orci in metus ultrices tristique. Cras commodo, felis convallis congue blandit, ligula neque rhoncus sem, gravida commodo neque lorem ut neque. Quisque sodales diam sed leo porttitor, dictum interdum nibh pellentesque."

    function limpiarBody() {
        document.body.innerHTML = ""
    }

    function añadirImagenes(imagenes = []) {
        imagenes.forEach(imagen => {
            let img = document.createElement("img")
            img.src = imagen
            document.body.appendChild(img)
        })
    }

    // Para el boton de NO
    let botonNo = document.getElementById("botonNo")
    botonNo.addEventListener("click", function () {
        limpiarBody()

        // Mensaje de "tu te lo pierdes"
        let tuTeLoPierdes = document.createElement("h1")
        tuTeLoPierdes.textContent = "Tu te lo pierdes!!!"
        document.body.appendChild(tuTeLoPierdes)

        añadirImagenes(["gato-enojado.gif"])

        // Mensaje de "Recarga para volver a jugar"
        let recarga = document.createElement("h4")
        recarga.textContent = "Cuando quieras jugar, recarga la página..."
        document.body.appendChild(recarga)
    })

    // Para el boton de SI
    let botonSi = document.getElementById("botonSi")
    botonSi.addEventListener("click", function () {
        limpiarBody()

        // Pregunta por el destino
        let preguntaDestino = document.createElement("h1")
        preguntaDestino.textContent = "Elige un destino: ¿Francia, España o Portugal?"
        document.body.appendChild(preguntaDestino)

        // Botones de los destinos
        let botonFrancia = document.createElement("button")
        botonFrancia.textContent = "Francia"
        document.body.appendChild(botonFrancia)

        let botonEspaña = document.createElement("button")
        botonEspaña.textContent = "España"
        document.body.appendChild(botonEspaña)

        let botonPortugal = document.createElement("button")
        botonPortugal.textContent = "Portugal"
        document.body.appendChild(botonPortugal)

        // Para el boton de Francia
        botonFrancia.addEventListener("click", function () {
            limpiarBody()

            // Pregunta por la ciudad
            let preguntaDestinoFr = document.createElement("h1")
            preguntaDestinoFr.textContent = "Elige un destino: ¿París, Marsella o Lyon?"
            document.body.appendChild(preguntaDestinoFr)

            // Botones de las ciudades
            let botonParis = document.createElement("button")
            botonParis.textContent = "París"
            document.body.appendChild(botonParis)

            let botonMarsella = document.createElement("button")
            botonMarsella.textContent = "Marsella"
            document.body.appendChild(botonMarsella)

            let botonLyon = document.createElement("button")
            botonLyon.textContent = "Lyon"
            document.body.appendChild(botonLyon)

            // Para el botón de París
            botonParis.addEventListener("click", function () {
                limpiarBody()

                // Título París
                let tituloParis = document.createElement("h1")
                tituloParis.textContent = "PARÍS"
                document.body.appendChild(tituloParis)

                // Párrafo lorem ipsum
                let parrafoParis = document.createElement("p")
                parrafoParis.textContent = loremIpsum
                document.body.appendChild(parrafoParis)

                // Imágenes de París
                añadirImagenes(["Paris-altura-torre-eiffel.jpg", "Paris-notre-dame.jpg", "Paris-louvre.jpg"])
            })

            // Para el botón de Marsella
            botonMarsella.addEventListener("click", function () {
                limpiarBody()

                // Título Marsella
                let tituloMarsella = document.createElement("h1")
                tituloMarsella.textContent = "MARSELLA"
                document.body.appendChild(tituloMarsella)

                // Párrafo lorem ipsum
                let parrafoMarsella = document.createElement("p")
                parrafoMarsella.textContent = loremIpsum
                document.body.appendChild(parrafoMarsella)

                // Imágenes de Marsella
                añadirImagenes(["Marsella-puerto.jpg", "Marsella-puerto2.jpg", "Marsella-notre-dame-de-la-garde.jpg"])
            })

            // Para el botón de Lyon
            botonLyon.addEventListener("click", function () {
                limpiarBody()

                // Título Lyon
                let tituloLyon = document.createElement("h1")
                tituloLyon.textContent = "LYON"
                document.body.appendChild(tituloLyon)

                // Párrafo lorem ipsum
                let parrafoLyon = document.createElement("p")
                parrafoLyon.textContent = loremIpsum
                document.body.appendChild(parrafoLyon)

                // Imágenes de París
                añadirImagenes(["Lyon-aereo.jpg", "Lyon-saint-georges.jpg", "Lyon-louis-xiv.jpg"])
            })
        })

        // Para el boton de España
        botonEspaña.addEventListener("click", function () {
            limpiarBody()

            // Pregunta por preferencia
            let preguntaDestinoEsp = document.createElement("h1")
            preguntaDestinoEsp.textContent = "Elige: ¿Playa o montaña?"
            document.body.appendChild(preguntaDestinoEsp)

            // Botones playa / montaña
            let botonPlaya = document.createElement("button")
            botonPlaya.textContent = "Playa"
            document.body.appendChild(botonPlaya)

            let botonMontaña = document.createElement("button")
            botonMontaña.textContent = "Montaña"
            document.body.appendChild(botonMontaña)

            // PLAYA
            botonPlaya.addEventListener("click", function () {
                limpiarBody()

                // Título playa
                let tituloPlaya = document.createElement("h1")
                tituloPlaya.textContent = "PLAYA"
                document.body.appendChild(tituloPlaya)

                // Párrafo lorem ipsum
                let parrafoPlaya = document.createElement("p")
                parrafoPlaya.textContent = loremIpsum
                document.body.appendChild(parrafoPlaya)

                // Imágenes de playa
                añadirImagenes(["Playa-malaga.jpg", "Playa-benidorm.jpg", "Playa-asturias.jpg"])
            })

            // MONTAÑA
            botonMontaña.addEventListener("click", function () {
                limpiarBody()

                // Título montaña
                let tituloMontaña = document.createElement("h1")
                tituloMontaña.textContent = "MONTAÑA"
                document.body.appendChild(tituloMontaña)

                // Párrafo lorem ipsum
                let parrafoMontaña = document.createElement("p")
                parrafoMontaña.textContent = loremIpsum
                document.body.appendChild(parrafoMontaña)

                // Imágenes de montaña
                añadirImagenes(["Montaña-pirineos.jpg", "Montaña-cazorla.jpg"])
            })
        })

        // Para el boton de Portugal
        botonPortugal.addEventListener("click", function () {
            limpiarBody()

            // Pregunta por preferencia
            let preguntaDestinoPor = document.createElement("h1")
            preguntaDestinoPor.textContent = "Elige: ¿Turismo, playa o montaña?"
            document.body.appendChild(preguntaDestinoPor)

            // Botones turismo / playa / montaña
            let botonTurismo = document.createElement("button")
            botonTurismo.textContent = "Turismo"
            document.body.appendChild(botonTurismo)

            let botonPlayaPor = document.createElement("button")
            botonPlayaPor.textContent = "Playa"
            document.body.appendChild(botonPlayaPor)

            let botonMontañaPor = document.createElement("button")
            botonMontañaPor.textContent = "Montaña"
            document.body.appendChild(botonMontañaPor)

            // TURISMO
            botonTurismo.addEventListener("click", function () {
                limpiarBody()

                // Título turismo
                let tituloTurismo = document.createElement("h1")
                tituloTurismo.textContent = "TURISMO: LISBOA"
                document.body.appendChild(tituloTurismo)

                // Párrafo lorem ipsum
                let parrafoTurismo = document.createElement("p")
                parrafoTurismo.textContent = loremIpsum
                document.body.appendChild(parrafoTurismo)

                // Imágenes de turismo
                añadirImagenes(["Turismo-lisboa.jpg"])
            })

            // PLAYA
            botonPlayaPor.addEventListener("click", function () {
                limpiarBody()

                // Título playa
                let tituloPlayaPor = document.createElement("h1")
                tituloPlayaPor.textContent = "PLAYA: ALGARVE"
                document.body.appendChild(tituloPlayaPor)

                // Párrafo lorem ipsum
                let parrafoPlayaPor = document.createElement("p")
                parrafoPlayaPor.textContent = loremIpsum
                document.body.appendChild(parrafoPlayaPor)

                // Imágenes de playa
                añadirImagenes(["Playa-algarve.jpg", "Playa-algarve2.jpg"])
            })

            // MONTAÑA
            botonMontañaPor.addEventListener("click", function () {
                limpiarBody()

                // Título montaña
                let tituloMontañaPor = document.createElement("h1")
                tituloMontañaPor.textContent = "MONTAÑA: NAZARET Y SANTUARIO FÁTIMA"
                document.body.appendChild(tituloMontañaPor)

                // Párrafo lorem ipsum
                let parrafoMontañaPor = document.createElement("p")
                parrafoMontañaPor.textContent = loremIpsum
                document.body.appendChild(parrafoMontañaPor)

                // Imágenes de montaña
                añadirImagenes(["Montaña-nazare.jpg", "Montaña-fatima.jpg"])
            })
        })
    })
})
