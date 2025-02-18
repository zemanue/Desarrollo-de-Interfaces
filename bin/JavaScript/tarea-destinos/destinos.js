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

    function añadirTexto(etiqueta, texto) {
        let elemento = document.createElement(etiqueta)
        let textoNodo = document.createTextNode(texto)
        elemento.appendChild(textoNodo)
        document.body.appendChild(elemento)
    }

    function añadirBoton(boton, texto) {
        boton.textContent = texto
        document.body.appendChild(boton)
    }

    function añadirImagenes(imagenes = []) {
        imagenes.forEach(imagen => {
            let img = document.createElement("img")
            img.setAttribute("src", imagen)
            document.body.appendChild(img)
        })
    }

    // Pregunta inicial
    añadirTexto("h1", "¿Deseas jugar con Javascript?")
    let botonSi = document.createElement("button")
    añadirBoton(botonSi, "SI")
    let botonNo = document.createElement("button")
    añadirBoton(botonNo, "NO")

    // Para el boton de NO
    botonNo.addEventListener("click", function () {
        limpiarBody()

        añadirTexto("h1", "Tu te lo pierdes!!!")
        añadirImagenes(["gato-enojado.gif"])
        añadirTexto("h4", "Cuando quieras jugar, recarga la página...")
    })

    // Para el boton de SI
    botonSi.addEventListener("click", function () {
        limpiarBody()

        añadirTexto("h1", "Elige un destino: ¿Francia, España o Portugal?")

        // Botones de los destinos
        let botonFrancia = document.createElement("button")
        añadirBoton(botonFrancia, "Francia")

        let botonEspaña = document.createElement("button")
        añadirBoton(botonEspaña, "España")

        let botonPortugal = document.createElement("button")
        añadirBoton(botonPortugal, "Portugal")

        // Para el boton de Francia
        botonFrancia.addEventListener("click", function () {
            limpiarBody()

            añadirTexto("h1", "Elige un destino: ¿París, Marsella o Lyon?")

            // Botones de las ciudades
            let botonParis = document.createElement("button")
            añadirBoton(botonParis, "París")

            let botonMarsella = document.createElement("button")
            añadirBoton(botonMarsella, "Marsella")

            let botonLyon = document.createElement("button")
            añadirBoton(botonLyon, "Lyon")

            // Para el botón de París
            botonParis.addEventListener("click", function () {
                limpiarBody()

                añadirTexto("h1", "PARÍS")
                añadirTexto("p", loremIpsum)
                añadirImagenes(["Paris-altura-torre-eiffel.jpg", "Paris-notre-dame.jpg", "Paris-louvre.jpg"])
            })

            // Para el botón de Marsella
            botonMarsella.addEventListener("click", function () {
                limpiarBody()

                añadirTexto("h1", "MARSELLA")
                añadirTexto("p", loremIpsum)
                añadirImagenes(["Marsella-puerto.jpg", "Marsella-puerto2.jpg", "Marsella-notre-dame-de-la-garde.jpg"])
            })

            // Para el botón de Lyon
            botonLyon.addEventListener("click", function () {
                limpiarBody()

                añadirTexto("h1", "LYON")
                añadirTexto("p", loremIpsum)
                añadirImagenes(["Lyon-aereo.jpg", "Lyon-saint-georges.jpg", "Lyon-louis-xiv.jpg"])
            })
        })

        // Para el boton de España
        botonEspaña.addEventListener("click", function () {
            limpiarBody()

            // Pregunta por preferencia
            añadirTexto("h1", "Elige: ¿Playa o montaña?")

            // Botones playa / montaña
            let botonPlaya = document.createElement("button")
            añadirBoton(botonPlaya, "Playa")

            let botonMontaña = document.createElement("button")
            añadirBoton(botonMontaña, "Montaña")

            // PLAYA
            botonPlaya.addEventListener("click", function () {
                limpiarBody()

                añadirTexto("h1", "PLAYA")
                añadirTexto("p", loremIpsum)
                añadirImagenes(["Playa-malaga.jpg", "Playa-benidorm.jpg", "Playa-asturias.jpg"])
            })

            // MONTAÑA
            botonMontaña.addEventListener("click", function () {
                limpiarBody()

                añadirTexto("h1", "MONTAÑA")
                añadirTexto("p", loremIpsum)
                añadirImagenes(["Montaña-pirineos.jpg", "Montaña-cazorla.jpg"])
            })
        })

        // Para el boton de Portugal
        botonPortugal.addEventListener("click", function () {
            limpiarBody()

            // Pregunta por preferencia
            añadirTexto("h1", "Elige: ¿Turismo, playa o montaña?")

            // Botones turismo / playa / montaña
            let botonTurismo = document.createElement("button")
            añadirBoton(botonTurismo, "Turismo")

            let botonPlayaPor = document.createElement("button")
            añadirBoton(botonPlayaPor, "Playa")

            let botonMontañaPor = document.createElement("button")
            añadirBoton(botonMontañaPor, "Montaña")

            // TURISMO
            botonTurismo.addEventListener("click", function () {
                limpiarBody()

                añadirTexto("h1", "TURISMO: LISBOA")
                añadirTexto("p", loremIpsum)
                añadirImagenes(["Turismo-lisboa.jpg"])
            })

            // PLAYA
            botonPlayaPor.addEventListener("click", function () {
                limpiarBody()

                añadirTexto("h1", "PLAYA: ALGARVE")
                añadirTexto("p", loremIpsum)
                añadirImagenes(["Playa-algarve.jpg", "Playa-algarve2.jpg"])
            })

            // MONTAÑA
            botonMontañaPor.addEventListener("click", function () {
                limpiarBody()

                añadirTexto("h1", "MONTAÑA: NAZARET Y SANTUARIO FÁTIMA")
                añadirTexto("p", loremIpsum)
                añadirImagenes(["Montaña-nazare.jpg", "Montaña-fatima.jpg"])
            })
        })
    })
})
