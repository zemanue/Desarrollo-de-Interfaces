
document.addEventListener("DOMContentLoaded", function () {
    // Crear variables para los select
    let listaPrimerPlato = document.getElementById("primerPlato")
    let listaSegundoPlato = document.getElementById("segundoPlato")
    let listaPostre = document.getElementById("postre")

    const precioSalmorejo = 4
    const precioCocido = 3
    const precioCampero = 4
    const precioAlbondigas = 6
    const precioCoulant = 2.50
    const precioCheesecake = 3

    let imagenPrimerPlato = document.getElementById("imagenPrimerPlato")
    let imagenSegundoPlato = document.getElementById("imagenSegundoPlato")
    let imagenPostre = document.getElementById("imagenPostre")

    let botonCalcularPrecio = document.getElementById("botonCalculoPrecio")

    let checkboxDescuento = document.getElementById("checkboxDescuento")

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

    botonCalcularPrecio.addEventListener("click", function () {
        let precioTotal = 0

        let primerPlato = listaPrimerPlato.value
        let segundoPlato = listaSegundoPlato.value
        let postre = listaPostre.value

        switch (primerPlato) {
            case "salmorejo":
                precioTotal += precioSalmorejo
                break
            case "cocido":
                precioTotal += precioCocido
                break
        }

        switch (segundoPlato) {
            case "campero":
                precioTotal += precioCampero
                break
            case "albondigas":
                precioTotal += precioAlbondigas
                break
        }

        switch (postre) {
            case "coulant":
                precioTotal += precioCoulant
                break
            case "cheesecake":
                precioTotal += precioCheesecake
                break
        }

        if (checkboxDescuento.checked) {
            precioTotal *= 0.9 // 10% de descuento
            alert(`¡Descuento conseguido! El precio total es de ${precioTotal}€`)
        } else {
            alert(`El precio total es de ${precioTotal}€`)
        }
    })
})