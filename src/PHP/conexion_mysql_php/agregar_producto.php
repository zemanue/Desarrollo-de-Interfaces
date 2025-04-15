<?php

include 'conexion.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = $_POST['nombre'];
    $descripcion = $_POST['descripcion'];
    $precio = $_POST['precio'];
    $stock = $_POST['stock'];

    $nombre = mysqli_real_escape_string($conexion, $nombre);
    $descripcion = mysqli_real_escape_string($conexion, $descripcion);
    $precio = mysqli_real_escape_string($conexion, $precio);
    $stock = mysqli_real_escape_string($conexion, $stock);

    $consulta = "INSERT INTO productos (nombre, descripcion, precio, stock) VALUES ('$nombre', '$descripcion', $precio, $stock)";

    if (mysqli_query($conexion, $consulta)) {
        echo "Producto agregado exitosamente.";
    } else {
        echo "Error al agregar el producto: " . mysqli_error($conexion);
    }

    echo '<br><a href="index.php">Volver al inicio</a>';


}