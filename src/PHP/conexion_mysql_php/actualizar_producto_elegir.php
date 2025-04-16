<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Actualizar Producto</title>
    <link rel="stylesheet" href="styles.css">
</head>

<?php
include 'conexion.php'; // Incluir el archivo de conexión a la base de datos

// Consulta para obtener los productos
$consulta = "SELECT * FROM productos";
$productos = [];

// Ejecutar la consulta y verificar si hay resultados (si hay productos en la BD)
if ($resultado = mysqli_query($conexion, $consulta)) {
    // Recorrer los resultados y almacenarlos en un array (hasta que no haya más filas)
    while ($fila = mysqli_fetch_assoc($resultado)) {
        $productos[] = $fila;
    }
} else {
    echo "Error en la consulta: " . mysqli_error($conexion);
}

// Cerrar conexión
mysqli_close($conexion);
?>

<body>

    <a class="boton-volver" href="index.php">Volver al inicio</a>

    <h1>Actualizar Producto</h1>
    <p>Por favor, elija un producto existente para modificarlo</p>

    <form action="actualizar_producto_form.php" method="POST">
        <select name="producto" id="producto" required>
            <option value="">Seleccione un producto</option>
            <?php foreach ($productos as $producto): ?>
                <option value="<?php echo $producto['id_producto']; ?>">
                    <?php echo $producto['id_producto'] . ' - ' . $producto['nombre']; ?>
                </option>
            <?php endforeach; ?>
        </select>

        <br><br>
        <button type="submit" id="btn_actualizar">Actualizar Producto</button>
    </form>
    <br><br>

</body>

</html>