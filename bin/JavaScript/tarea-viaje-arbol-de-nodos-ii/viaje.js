
document.addEventListener("DOMContentLoaded", function () {
    let paises = document.getElementById("paises")
    let imagen = document.getElementById("imagen")
    let destino = document.getElementById("destino")

    paises.addEventListener("change", function () {
        let imagenes = ["portada.gif", "france.jpg", "italy.jpg", "germany.jpg", "portugal.jpg", "spain.jpg"]
        let paisSeleccionado = paises.value
        let posicion = paises.selectedIndex
        
        if (paisSeleccionado == "") {
            destino.innerHTML = "No has seleccionado ningún país"
        } else {
            destino.innerHTML = "Has seleccionado:<strong>" + paisSeleccionado + "</strong>"
        }

        imagen.setAttribute("src", imagenes[posicion])
    })
})