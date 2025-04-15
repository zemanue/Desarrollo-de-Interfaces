<?php

include 'conexion.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['id_producto'];
    $nombre = $_POST['nombre'];
    $descripcion = $_POST['descripcion'];
    $precio = $_POST['precio'];
    $stock = $_POST['stock'];

    $consulta = "UPDATE productos SET nombre = '$nombre', descripcion = '$descripcion', precio = $precio, stock = $stock WHERE id_producto = $id";

    if (mysqli_query($conexion, $consulta)) {
        echo "Producto actualizado exitosamente.";
    } else {
        echo "Error al actualizar el producto: " . mysqli_error($conexion);
    }

    echo '<br><a href="index.php">Volver al inicio</a>';

    // Cerrar conexión
    mysqli_close($conexion);
}