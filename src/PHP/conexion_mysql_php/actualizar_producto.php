<?php

include 'conexion.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id_producto = $_POST['id_producto'];
    $nombre = $_POST['nombre'];
    $descripcion = $_POST['descripcion'];
    $precio = $_POST['precio'];
    $cantidad = $_POST['cantidad'];
    $categoria = $_POST['categoria'];

    $consulta = "UPDATE productos 
    SET nombre = '$nombre', descripcion = '$descripcion', precio = $precio, cantidad = $cantidad, id_categoria = $categoria 
    WHERE id_producto = $id_producto";

    if (mysqli_query($conexion, $consulta)) {
        echo '<p><strong>' . $nombre . '</strong> actualizado exitosamente.</p>';
    } else {
        echo "Error al actualizar el producto: " . mysqli_error($conexion);
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
    <title>Actualizar producto</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>

</body>

</html>