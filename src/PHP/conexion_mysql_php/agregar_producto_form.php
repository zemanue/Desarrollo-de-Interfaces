<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agregar Producto</title>
    <link rel="stylesheet" href="styles.css">
</head>

<?php
include 'conexion.php';

// Consulta para obtener las categorías
$consulta = "SELECT * FROM categorias";
$categorias = [];

// Ejecutar la consulta y verificar si hay resultados (si hay productos en la BD)
if ($resultado = mysqli_query($conexion, $consulta)) {
    // Recorrer los resultados y almacenarlos en un array (hasta que no haya más filas)
    while ($fila = mysqli_fetch_assoc($resultado)) {
        $categorias[] = $fila;
    }
} else {
    echo "Error en la consulta: " . mysqli_error($conexion);
}

// Cerrar conexión
mysqli_close($conexion);
?>

<body>

    <a class="boton-volver" href="index.php">Volver al inicio</a>

    <h1>Agregar Producto</h1>
    <p>Por favor, complete el siguiente formulario para agregar un nuevo producto.</p>
    <form action="agregar_producto.php" method="post">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required>
        <br><br>

        <label for="descripcion">Descripción:</label>
        <textarea id="descripcion" name="descripcion" required></textarea>
        <br><br>

        <label for="precio">Precio:</label>
        <input type="number" id="precio" name="precio" step="0.01" required>
        <br><br>

        <label for="cantidad">Cantidad:</label>
        <input type="number" id="cantidad" name="cantidad" required>
        <br><br>

        <select name="categoria" id="categoria" required>
            <option value="">Seleccione una categoría</option>
            <?php foreach ($categorias as $categoria): ?>
                <option value="<?php echo $categoria['id_categoria']; ?>">
                    <?php echo $categoria['id_categoria'] . ' - ' . $categoria['nombre']; ?>
                </option>
            <?php endforeach; ?>
        </select>

        <button type="submit">Agregar Producto</button>
    </form>
    <br><br>

</body>

</html>