<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Actualizar Producto</title>
    <link rel="stylesheet" href="styles.css">
</head>

<?php
include 'conexion.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $codigo_producto = $_POST['producto'];

    // Obtener los datos del producto seleccionado
    $consulta_producto = "SELECT * FROM productos WHERE id_producto = $codigo_producto";
    $resultado_producto = mysqli_query($conexion, $consulta_producto);
    $producto = mysqli_fetch_assoc($resultado_producto);

    // Obtener todas las categorías para el select
    $consulta_categorias = "SELECT * FROM categorias";
    $resultado_categorias = mysqli_query($conexion, $consulta_categorias);
    $categorias = [];
    while ($fila_categoria = mysqli_fetch_assoc($resultado_categorias)) {
        $categorias[] = $fila_categoria;
    }

} else {
    echo "No se ha seleccionado ningún producto.";
    echo '<br><a href="index.php">Volver al inicio</a>';
    // Cerrar conexión aquí si no se seleccionó producto para evitar errores posteriores
    mysqli_close($conexion);
    exit();
}

?>

<body>

    <a class="boton-volver" href="index.php">Volver al inicio</a>

    <h1>Actualizar Producto</h1>
    <p>Por favor, complete el siguiente formulario para actualizar el producto.</p>
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

        <label for="cantidad">Cantidad:</label>
        <input type="number" id="cantidad" name="cantidad" value="<?php echo $producto['cantidad'] ?>" required>
        <br><br>

        <label for="categoria">Categoría:</label>
        <select name="categoria" id="categoria" required>
            <option value="">Seleccione una categoría</option>
            <?php foreach ($categorias as $categoria): ?>
                <!-- Se compara si el id_categoria coincide con el id_categoria del producto que se está actualizando. Si coincide, se convierte en la opción seleccionada del select (gracias a que se añade la palabra clave "selected") -->
                <option value="<?php echo $categoria['id_categoria']; ?>" 
                    <?php if ($categoria['id_categoria'] == $producto['id_categoria']) echo 'selected'; ?>>
                    <?php echo $categoria['nombre']; ?>
                </option>
            <?php endforeach; ?>
        </select>
        <br><br>

        <button type="submit">Actualizar Producto</button>
    </form>
    <br><br>

</body>

</html>

<?php
mysqli_close($conexion);
?>