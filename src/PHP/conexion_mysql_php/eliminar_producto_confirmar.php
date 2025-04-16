<?php

include 'conexion.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $codigo_producto = $_POST['producto'];

    $consulta = "SELECT * FROM productos WHERE id_producto = $codigo_producto";
    $resultado = mysqli_query($conexion, $consulta);

    $producto = mysqli_fetch_assoc($resultado);

    echo '<p>¿Está seguro de que desea eliminar el producto <strong>' . $producto['nombre'] . '</strong> de la base de datos?</p>';
    echo '<form action="eliminar_producto.php" method="POST">';
    echo '<input type="hidden" name="id_producto" value="' . $producto['id_producto'] . '">';
    echo '<input type="hidden" name="nombre" value="' . $producto['nombre'] . '">';
    echo '<button class="boton-eliminar" type="submit">Eliminar</button>';
    echo '<a class="boton" href="index.php">Cancelar</a>';
} else {
    echo 'No se ha seleccionado ningún producto.';
    echo '<br><a class="boton-volver" href="index.php">Volver al inicio</a>';
}

// Cerrar conexión
mysqli_close($conexion);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confirmar eliminar prooducto</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    
</body>
</html>