<?php

include 'conexion.php'; 

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $codigo_producto = $_POST['producto'];

        $consulta = "SELECT * FROM productos WHERE id_producto = $codigo_producto";
        $resultado = mysqli_query($conexion, $consulta);

        $producto = mysqli_fetch_assoc($resultado);

        echo "<p>¿Está seguro de que desea eliminar el producto <strong>" . $producto['nombre'] . "</strong> de la base de datos?</p>";
        echo "<form action='eliminar_producto.php' method='POST'>";
        echo "<input type='hidden' name='id_producto' value='" . $producto['id_producto'] . "'>";
        echo "<button type='submit'>Eliminar</button>";
        echo "<a href='index.php'>Cancelar</a>";
    } else {
        echo "No se ha seleccionado ningún producto.";
        echo '<br><a href="index.php">Volver al inicio</a>';
    }

} else {
    echo "No se ha enviado el formulario.";
    echo '<br><a href="index.php">Volver al inicio</a>';
}

// Cerrar conexión
mysqli_close($conexion);