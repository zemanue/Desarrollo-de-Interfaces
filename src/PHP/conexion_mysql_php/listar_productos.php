<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Listar Productos</title>
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

    <a class="boton-volver" href='index.php'>Volver al inicio</a>

    <h1>Lista de productos</h1>

    <!-- Si el array $productos no está vacío -->
    <?php if (!empty($productos)): ?>
        <table>
            <!-- Encabezado -->
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                    <th>Stock</th>
                </tr>
            </thead>

            <!-- Cuerpo -->
            <tbody>
                <?php foreach ($productos as $producto): ?>
                    <tr>
                        <td><?php echo $producto['id_producto']; ?></td>
                        <td><?php echo $producto['nombre']; ?></td>
                        <td><?php echo $producto['descripcion']; ?></td>
                        <td><?php echo $producto['precio']; ?> €</td>
                        <td><?php echo $producto['stock']; ?></td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>

    <?php else: ?>
        <p>No hay productos disponibles en la base de datos.</p>
        <p><a href='agregar_producto_view.html'>Agregar un nuevo producto</a></p>
    <?php endif; ?>

</body>

</html>