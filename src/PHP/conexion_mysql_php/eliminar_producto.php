<?php

include 'conexion.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id_producto = $_POST['id_producto'];

    // Consulta para eliminar el producto
    $consulta = "DELETE FROM productos WHERE id_producto = $id_producto";

    if (mysqli_query($conexion, $consulta)) {
        echo "Producto eliminado exitosamente.";
    } else {
        echo "Error al eliminar el producto: " . mysqli_error($conexion);
    }
    
    echo '<br><a href="index.php">Volver al inicio</a>';

    // Cerrar conexión
        mysqli_close($conexion);
    }
    