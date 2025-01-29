document.addEventListener("DOMContentLoaded", function () {
    
    // CREAR UNA TABLA DE 2X3
    // Crear la tabla
    let tabla = document.createElement("table")
    document.body.appendChild(tabla)

    // Crear las dos filas
    let fila1 = document.createElement("tr")
    tabla.appendChild(fila1)

    let fila2 = document.createElement("tr")
    tabla.appendChild(fila2)

    // Crear las celdas de la fila 1
    let celda11 = document.createElement("td")
    fila1.appendChild(celda11)

    let celda12 = document.createElement("td")
    fila1.appendChild(celda12)

    let celda13 = document.createElement("td")
    fila1.appendChild(celda13)

    // Crear las celdas de la fila 2
    let celda21 = document.createElement("td")
    fila2.appendChild(celda21)

    let celda22 = document.createElement("td")
    fila2.appendChild(celda22)

    let celda23 = document.createElement("td")
    fila2.appendChild(celda23)

    // Crear las imágenes
    let imgGoogle = document.createElement("img")
    imgGoogle.setAttribute("src", "imgs/googleplex.jpg")
    celda11.appendChild(imgGoogle)

    let imgMicrosoft = document.createElement("img")
    imgMicrosoft.setAttribute("src", "imgs/microsoft-building.jpg")
    celda12.appendChild(imgMicrosoft)

    let imgApple = document.createElement("img")
    imgApple.setAttribute("src", "imgs/apple-park.jpg")
    celda13.appendChild(imgApple)

    // Crear los enlaces
    let enlaceGoogle = document.createElement("a")
    enlaceGoogle.setAttribute("href", "https://es.wikipedia.org/wiki/Google")
    enlaceGoogle.textContent = "Google"
    celda21.appendChild(enlaceGoogle)

    let enlaceMicrosoft = document.createElement("a")
    enlaceMicrosoft.setAttribute("href", "https://es.wikipedia.org/wiki/Microsoft")
    enlaceMicrosoft.textContent = "Microsoft"
    celda22.appendChild(enlaceMicrosoft)

    let enlaceApple = document.createElement("a")
    enlaceApple.setAttribute("href", "https://es.wikipedia.org/wiki/Apple")
    enlaceApple.textContent = "Apple"
    celda23.appendChild(enlaceApple)

})