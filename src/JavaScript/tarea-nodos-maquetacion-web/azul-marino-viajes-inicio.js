document.addEventListener('DOMContentLoaded', function() {
    // Textos lorem ipsum
    const loremIpsumCorto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    const loremIpsumLargo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu libero eu urna maximus congue. Donec pretium purus orci, ac placerat tellus placerat vitae. Proin condimentum scelerisque vestibulum. Integer auctor lectus ac mollis feugiat. Aenean ipsum enim, varius quis felis eget, maximus ullamcorper tellus. Nam condimentum diam at ligula dignissim porttitor. Integer a eros risus. Vestibulum ut ante molestie, suscipit sapien a, egestas risus. Fusce gravida molestie accumsan. Maecenas quis blandit felis."
    
    let parrafoSeccion1 = document.querySelector("#seccion1 p")
    parrafoSeccion1.textContent = loremIpsumLargo

    // Imagen sección 1
    let imagenSeccion1 = document.getElementById("imagenSeccion1")
    imagenSeccion1.src = "articulos-808572.jpg"
    imagenSeccion1.alt = "Puerta de Brandeburgo"

    // Imagen sección 2
    let imagenSeccion2 = document.getElementById("imagenSeccion2")
    imagenSeccion2.src = "foto6 (2).jpg"
    imagenSeccion2.alt = "Imagen sección 2"

    // Creacion de la sección 3
    let imagenesSeccion3 = [
        "Viajes_Donde_Viajes_3.jpg", 
        "kayak-valencia.jpeg", 
        "600x400_viajes-lujo-FOTO-1-White-Dessert-experiencia-Polo-Norte-en-jet-privaso.jpg"
    ]
    let altsSeccion3 = [
        "Imagen de bote en la playa", 
        "Imagen de kayak en Valencia", 
        "Imagen de jet privado en el Polo Norte"
    ]

    for (let i = 0; i < imagenesSeccion3.length; i++) {
        let seccion3 = document.getElementById("seccion3")
        let div = document.createElement("div")
        seccion3.appendChild(div)

        let img = document.createElement("img")
        img.src = imagenesSeccion3[i]
        img.alt = altsSeccion3[i]
        div.appendChild(img)

        let h5 = document.createElement("h5")
        h5.textContent = loremIpsumCorto
        div.appendChild(h5)

        let button = document.createElement("button")
        button.textContent = "Comprar"
        div.appendChild(button)
    }

})