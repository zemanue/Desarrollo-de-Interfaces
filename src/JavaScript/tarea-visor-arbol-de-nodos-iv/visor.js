document.addEventListener("DOMContentLoaded", function () {
    let imagenAmpliada = document.getElementById("ampliada");
    
    let imagenesVisor = document.querySelectorAll("#visorImagenes img")
    
    for (let i = 0; i < imagenesVisor.length; i++) {
        imagenesVisor[i].addEventListener("click", function () {
            imagenAmpliada.src = imagenesVisor[i].src;
        })
    }
})