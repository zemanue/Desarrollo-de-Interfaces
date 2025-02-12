document.addEventListener('DOMContentLoaded', function() {
    // Imagen sección 1
    let imagenSeccion1 = document.getElementById("imagenSeccion1")
    imagenSeccion1.src = "articulos-808572.jpg"
    imagenSeccion1.alt = "Puerta de Brandeburgo"

    // Imagen sección 2
    let imagenSeccion2 = document.getElementById("imagenSeccion2")
    imagenSeccion2.src = "foto6 (2).jpg"
    imagenSeccion2.alt = "Imagen sección 2"

    // Imágenes sección 3
    let imagenesSeccion3 = document.querySelectorAll("#seccion3 img")
    imagenesSeccion3[0].src = "Viajes_Donde_Viajes_3.jpg"
    imagenesSeccion3[0].alt = "Imagen de bote en la playa"
    imagenesSeccion3[1].src = "kayak-valencia.jpeg"
    imagenesSeccion3[1].alt = "Imagen de kayak en Valencia"
    imagenesSeccion3[2].src = "600x400_viajes-lujo-FOTO-1-White-Dessert-experiencia-Polo-Norte-en-jet-privaso.jpg"
    imagenesSeccion3[2].alt = "Imagen de jet privado en el Polo Norte"
})