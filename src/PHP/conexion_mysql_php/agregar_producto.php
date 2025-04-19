<?php

include 'conexion.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = $_POST['nombre'];
    $descripcion = $_POST['descripcion'];
    $precio = $_POST['precio'];
    $cantidad = $_POST['cantidad'];
    $categoria = $_POST['categoria'];

    $consulta = "INSERT INTO productos (nombre, descripcion, precio, cantidad, id_categoria) VALUES ('$nombre', '$descripcion', $precio, $cantidad, $categoria)";

    if (mysqli_query($conexion, $consulta)) {
        echo '<p><strong>' . $nombre . '</strong> agregado exitosamente.</p>';
    } else {
        echo 'Error al agregar el producto: ' . mysqli_error($conexion);
    }

    echo '<br><a class="boton-volver" href="index.php">Volver al inicio</a>';

    // Cerrar conexión
    mysqli_close($conexion);
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agregar producto</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>

</body>

</html>