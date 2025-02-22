const alumnos = [
    { nombre: "María", apellido: "Perez", anioNacimiento: 2000, curso: "Desarrollo Web", foto: "https://static.diariofemenino.com/uploads/belleza/82981-CARA.jpg" },
    { nombre: "Juan", apellido: "Lopez", anioNacimiento: 1993, curso: "Programación", foto: "https://static.abc.es/media/ciencia/2019/01/17/AdobeStock_221150952-U30834880027PMF--1248x698@abc.jpg" },
    { nombre: "Carlos", apellido: "Gomez", anioNacimiento: 2003, curso: "Diseño UX/UI", foto: "https://img.freepik.com/foto-gratis/cierrese-encima-retrato-cara-joven-hombre-barbudo_171337-2887.jpg" },
    { nombre: "Ana", apellido: "Martinez", anioNacimiento: 1990, curso: "Ciberseguridad", foto: "https://phantom-elmundo.unidadeditorial.es/5d85b5fdd9baacb3a5f0fe1f1c8550fc/crop/54x0/700x430/resize/414/f/jpg/assets/multimedia/imagenes/2020/09/03/15991267102470.jpg" },
    { nombre: "Sofía", apellido: "Rodriguez", anioNacimiento: 1998, curso: "Redes", foto: "https://estaticos-cdn.prensaiberica.es/clip/958630c2-98d1-4b52-bbc1-79f84d8a07ca_16-9-aspect-ratio_default_0.jpg" },
    { nombre: "Luis", apellido: "Fernandez", anioNacimiento: 2000, curso: "Inteligencia Artificial", foto: "https://media.istockphoto.com/id/1766352902/es/v%C3%ADdeo/diversidad-de-personas-muchas-razas-diferentes-retrato-de-rostro-multi%C3%A9tnico-mezcla-humana.jpg?s=640x640&k=20&c=jJK56ZTa6OJ5eFLsMoIWd9M-YvuumhuE5b-69Q2MYEc=" }
];

document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.minHeight = "100vh";
document.body.style.backgroundColor = "#f0f0f0";

const contenedor = document.getElementById("contenedor");
contenedor.style.display = "grid";
contenedor.style.gridTemplateColumns = "repeat(3, 1fr)";
contenedor.style.gap = "20px";
contenedor.style.textAlign = "center";

alumnos.forEach(alumno => {
    const tarjeta = document.createElement("div");
    tarjeta.style.background = "white";
    tarjeta.style.padding = "15px";
    tarjeta.style.borderRadius = "10px";
    tarjeta.style.boxShadow = "2px 2px 10px rgba(0, 0, 0, 0.2)";
    tarjeta.style.border = "1px solid black";

    const imagen = document.createElement("img");
    imagen.src = alumno.foto;
    imagen.alt = `Foto de ${alumno.nombre}`;
    imagen.style.width = "100px";
    imagen.style.height = "100px";
    imagen.style.borderRadius = "50%";
    imagen.style.border = "2px solid black";
    imagen.style.objectFit = "cover"; // 💡 Mantiene la proporción sin deformarse

    const info = document.createElement("p");
    const edad = new Date().getFullYear() - alumno.anioNacimiento;
    info.innerHTML = `<strong>${alumno.nombre} ${alumno.apellido}</strong><br>Edad: ${edad} años<br>Curso: ${alumno.curso}`;
    info.style.marginTop = "10px";
    info.style.fontSize = "16px";

    tarjeta.appendChild(imagen);
    tarjeta.appendChild(info);
    contenedor.appendChild(tarjeta);
});

