<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Actualizar Producto</title>
</head>

<?php
include 'conexion.php'; // Incluir el archivo de conexión a la base de datos

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $codigo_producto = $_POST['producto'];

    $consulta = "SELECT * FROM productos WHERE id_producto = $codigo_producto";
    $resultado = mysqli_query($conexion, $consulta);

    $producto = mysqli_fetch_assoc($resultado);
} else {
    echo "No se ha seleccionado ningún producto.";
    echo '<br><a href="index.php">Volver al inicio</a>';
}

// Cerrar conexión
mysqli_close($conexion);
?>

<body>
    <h1>Actualizar Producto</h1>
    <p>Por favor, complete el siguiente formulario para actualizar un nuevo producto.</p>
    <form action="actualizar_producto.php" method="post">
        <input type="hidden" name="id_producto" value="<?php echo $producto['id_producto'] ?>">

        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" value="<?php echo $producto['nombre'] ?>" required>
        <br><br>

        <label for="descripcion">Descripción:</label>
        <textarea id="descripcion" name="descripcion" required><?php echo $producto['descripcion']; ?></textarea>
        <br><br>

        <label for="precio">Precio:</label>
        <input type="number" id="precio" name="precio" step="0.01" value="<?php echo $producto['precio'] ?>" required>
        <br><br>

        <label for="stock">Stock:</label>
        <input type="number" id="stock" name="stock" value="<?php echo $producto['stock'] ?>" required>
        <br><br>

        <button type="submit">Actualizar Producto</button>
    </form>
</body>

</html>