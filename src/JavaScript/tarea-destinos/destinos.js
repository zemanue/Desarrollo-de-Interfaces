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
            • Playa: Algarbe (texto y dos fotos) 
            • Montaña: Fotos de Nazaret y santuario Fátima
*/
document.addEventListener('DOMContentLoaded', function () {

    // Para el boton de NO
    let botonNo = document.getElementById("botonNo")
    botonNo.addEventListener("click", function () {
        // Eliminar todos los elementos del body
        document.body.innerHTML = ""

        // Mensaje de "tu te lo pierdes"
        let tuTeLoPierdes = document.createElement("h1")
        tuTeLoPierdes.textContent = "Tu te lo pierdes!!!"
        document.body.appendChild(tuTeLoPierdes)

        // Imagen de gato enojado
        let imagenBotonNo = document.createElement("img")
        imagenBotonNo.src = "gato-enojado.gif"
        document.body.appendChild(imagenBotonNo)

        // Mensaje de "Recarga para volver a jugar"
        let recarga = document.createElement("h4")
        recarga.textContent = "Cuando quieras jugar, recarga la página..."
        document.body.appendChild(recarga)
    })

    // Para el boton de SI
    let botonSi = document.getElementById("botonSi")
    botonSi.addEventListener("click", function () {
        document.body.innerHTML = ""

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

        let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean arcu dolor, pharetra vel porttitor sed, aliquam vel nisi. Ut nec consectetur nisi. Pellentesque rhoncus metus a metus tempus faucibus. Proin tempor elit elementum dolor congue eleifend. Aliquam euismod orci in metus ultrices tristique. Cras commodo, felis convallis congue blandit, ligula neque rhoncus sem, gravida commodo neque lorem ut neque. Quisque sodales diam sed leo porttitor, dictum interdum nibh pellentesque."

        // Para el boton de Francia
        botonFrancia.addEventListener("click", function () {
            document.body.innerHTML = ""

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
                document.body.innerHTML = ""

                // Título París
                let tituloParis = document.createElement("h1")
                tituloParis.textContent = "PARÍS"
                document.body.appendChild(tituloParis)

                // Párrafo lorem ipsum
                let parrafoParis = document.createElement("p")
                parrafoParis.textContent = loremIpsum
                document.body.appendChild(parrafoParis)

                // Imágenes de París
                let imgParis1 = document.createElement("img")
                imgParis1.src = "Paris-altura-torre-eiffel.jpg"
                document.body.appendChild(imgParis1)

                let imgParis2 = document.createElement("img")
                imgParis2.src = "Paris-notre-dame.jpg"
                document.body.appendChild(imgParis2)

                let imgParis3 = document.createElement("img")
                imgParis3.src = "Paris-louvre.jpg"
                document.body.appendChild(imgParis3)
            })

            // Para el botón de Marsella
            botonMarsella.addEventListener("click", function () {
                document.body.innerHTML = ""

                // Título Marsella
                let tituloMarsella = document.createElement("h1")
                tituloMarsella.textContent = "MARSELLA"
                document.body.appendChild(tituloMarsella)

                // Párrafo lorem ipsum
                let parrafoMarsella = document.createElement("p")
                parrafoMarsella.textContent = loremIpsum
                document.body.appendChild(parrafoMarsella)

                // Imágenes de Marsella
                let imgMarsella1 = document.createElement("img")
                imgMarsella1.src = "Marsella-puerto.jpg"
                document.body.appendChild(imgMarsella1)

                let imgMarsella2 = document.createElement("img")
                imgMarsella2.src = "Marsella-puerto2.jpg"
                document.body.appendChild(imgMarsella2)

                let imgMarsella3 = document.createElement("img")
                imgMarsella3.src = "Marsella-notre-dame-de-la-garde.jpg"
                document.body.appendChild(imgMarsella3)
            })

            // Para el botón de Lyon
            botonLyon.addEventListener("click", function () {
                document.body.innerHTML = ""

                // Título Lyon
                let tituloLyon = document.createElement("h1")
                tituloLyon.textContent = "LYON"
                document.body.appendChild(tituloLyon)

                // Párrafo lorem ipsum
                let parrafoLyon = document.createElement("p")
                parrafoLyon.textContent = loremIpsum
                document.body.appendChild(parrafoLyon)

                // Imágenes de París
                let imgLyon1 = document.createElement("img")
                imgLyon1.src = "Lyon-aereo.jpg"
                document.body.appendChild(imgLyon1)

                let imgLyon2 = document.createElement("img")
                imgLyon2.src = "Lyon-saint-georges.jpg"
                document.body.appendChild(imgLyon2)

                let imgLyon3 = document.createElement("img")
                imgLyon3.src = "Lyon-louis-xiv.jpg"
                document.body.appendChild(imgLyon3)
            })
        })

        // Para el boton de España
        botonEspaña.addEventListener("click", function () {
            document.body.innerHTML = ""

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
                document.body.innerHTML = ""

                // Título playa
                let tituloPlaya = document.createElement("h1")
                tituloPlaya.textContent = "PLAYA"
                document.body.appendChild(tituloPlaya)

                // Párrafo lorem ipsum
                let parrafoPlaya = document.createElement("p")
                parrafoPlaya.textContent = loremIpsum
                document.body.appendChild(parrafoPlaya)

                // Imágenes de playa
                let imgPlaya1 = document.createElement("img")
                imgPlaya1.src = "Playa-malaga.jpg"
                document.body.appendChild(imgPlaya1)

                let imgPlaya2 = document.createElement("img")
                imgPlaya2.src = "Playa-benidorm.jpg"
                document.body.appendChild(imgPlaya2)

                let imgPlaya3 = document.createElement("img")
                imgPlaya3.src = "Playa-asturias.jpg"
                document.body.appendChild(imgPlaya3)
            })

            // MONTAÑA
            botonMontaña.addEventListener("click", function () {
                document.body.innerHTML = ""

                // Título montaña
                let tituloMontaña = document.createElement("h1")
                tituloMontaña.textContent = "MONTAÑA"
                document.body.appendChild(tituloMontaña)

                // Párrafo lorem ipsum
                let parrafoMontaña = document.createElement("p")
                parrafoMontaña.textContent = loremIpsum
                document.body.appendChild(parrafoMontaña)

                // Imágenes de montaña
                let imgMontaña1 = document.createElement("img")
                imgMontaña1.src = "Montaña-pirineos.jpg"
                document.body.appendChild(imgMontaña1)

                let imgMontaña2 = document.createElement("img")
                imgMontaña2.src = "Montaña-cazorla.jpg"
                document.body.appendChild(imgMontaña2)
            })
        })
    })
})
