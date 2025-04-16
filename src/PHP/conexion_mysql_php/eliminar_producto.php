<?php

include 'conexion.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id_producto = $_POST['id_producto'];
    $nombre = $_POST['nombre'];

    // Consulta para eliminar el producto
    $consulta = "DELETE FROM productos WHERE id_producto = $id_producto";

    if (mysqli_query($conexion, $consulta)) {
        echo '<p><strong>' . $nombre . '</strong> eliminado exitosamente. ¡Chao!</p>';
    } else {
        echo "Error al eliminar el producto: " . mysqli_error($conexion);
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
    <title>Elminar producto</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    
</body>
</html>