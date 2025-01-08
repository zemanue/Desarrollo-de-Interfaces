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
document.addEventListener('DOMContentLoaded', function() {
    
    // Para el boton de NO
    let botonNo = document.getElementById("botonNo")
    botonNo.addEventListener("click", function() {
        let tuTeLoPierdes = document.createElement("h1")
        tuTeLoPierdes.textContent = "Tu te lo pierdes!!!"
        document.body.appendChild(tuTeLoPierdes)

        let imagenBotonNo = document.createElement("img")
        imagenBotonNo.src = "gato-enojado.gif"
        document.body.appendChild(imagenBotonNo)
    })

    // Para el boton de SI
    let botonSi = document.getElementById("botonSi")
    botonSi.addEventListener("click", function() {
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

    })
})
