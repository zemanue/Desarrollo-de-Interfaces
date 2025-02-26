class Coche {
    // Método constructor
    constructor(marca, modelo, kilometros, anyo, precio, motor, foto, disponible) {
        this.marca = marca;
        this.modelo = modelo;
        this.kilometros = kilometros;
        this.anyo = anyo;
        this.precio = precio;
        this.motor = motor;
        this.foto = foto;
        this.disponible = disponible;
    }

    // Método para mostrar los datos del coche en el HTML
    mostrarDatos = function () {
        // Crear el div contenedor
        let div = document.createElement("div")

        // Imagen del coche
        let img = document.createElement("img")
        img.src = this.foto
        img.alt = `${this.marca} ${this.modelo}`
        div.appendChild(img)

        // Información del coche
        let ul = document.createElement("ul")
        div.appendChild(ul)

        // Map con los títulos y los valores de cada propiedad del coche
        let propiedades = new Map([
            ["Marca", this.marca],
            ["Modelo", this.modelo],
            ["Kilómetros", this.kilometros + " km"],
            ["Año", this.anyo],
            ["Precio", this.precio + "€"],
            ["Motor", this.motor],
            ["Disponible", this.disponible ? "Si" : "No"]
        ])

        // Bucle que va añadiendo cada característica del coche a la lista ul
        propiedades.forEach((valor, titulo) => {
            // Se crea un li con el título y la propiedad del coche
            let li = document.createElement("li")
            li.innerHTML = `<strong>${titulo}</strong>: ${valor}`
            ul.appendChild(li)
        })
        
        // Se devuelve el div generado para añadirlo al section creado desde concesionario.js
        return div
    }
}