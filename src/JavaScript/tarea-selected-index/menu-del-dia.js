
document.addEventListener("DOMContentLoaded", function () {
    // Crear variables para los select
    let listaPrimerPlato = document.getElementById("primerPlato")
    let listaSegundoPlato = document.getElementById("segundoPlato")
    let listaPostre = document.getElementById("postre")

    let imagenPrimerPlato = document.getElementById("imagenPrimerPlato")
    let imagenSegundoPlato = document.getElementById("imagenSegundoPlato")
    let imagenPostre = document.getElementById("imagenPostre")

    // Acciones cuando 
    listaPrimerPlato.addEventListener("change", function () {
        let platoSeleccionado = listaPrimerPlato.value

        switch (platoSeleccionado) {
            case "salmorejo":
                imagenPrimerPlato.setAttribute("src", "salmorejo.jpg")
                break
            case "cocido":
                imagenPrimerPlato.setAttribute("src", "cocido.jpg")
                break
            default:
                imagenPrimerPlato.setAttribute("src", "plato-no-seleccionado.jpg")
                break
        }
    })

    listaSegundoPlato.addEventListener("change", function () {
        let platoSeleccionado = listaSegundoPlato.value

        switch (platoSeleccionado) {
            case "campero":
                imagenSegundoPlato.setAttribute("src", "campero.jpg")
                break
            case "albondigas":
                imagenSegundoPlato.setAttribute("src", "albondigas.jpg")
                break
            default:
                imagenSegundoPlato.setAttribute("src", "plato-no-seleccionado.jpg")
                break
        }
    })

    listaPostre.addEventListener("change", function () {
        let platoSeleccionado = listaPostre.value

        switch (platoSeleccionado) {
            case "coulant":
                imagenPostre.setAttribute("src", "coulant.jpg")
                break
            case "cheesecake":
                imagenPostre.setAttribute("src", "cheesecake.jpg")
                break
            default:
                imagenPostre.setAttribute("src", "plato-no-seleccionado.jpg")
                break
        }
    })

})