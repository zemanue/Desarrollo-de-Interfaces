<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Listar Productos</title>
    <link rel="stylesheet" href="styles.css">
</head>

<?php
include 'conexion.php';

// Consulta para obtener los productos y el nombre de su categoría
$consulta = "SELECT
    p.id_producto,
    p.nombre AS nombre_producto,
    p.descripcion,
    p.precio,
    p.cantidad,
    c.nombre AS nombre_categoria
FROM
    productos p
JOIN
    categorias c ON p.id_categoria = c.id_categoria";

$productos = [];

// Ejecutar la consulta y verificar si hay resultados
if ($resultado = mysqli_query($conexion, $consulta)) {
    // Recorrer los resultados y almacenarlos en un array
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

    <?php if (!empty($productos)): ?>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Categoría</th>
                </tr>
            </thead>

            <tbody>
                <?php foreach ($productos as $producto): ?>
                    <tr>
                        <td><?php echo $producto['id_producto']; ?></td>
                        <td><?php echo $producto['nombre_producto']; ?></td>
                        <td><?php echo $producto['descripcion']; ?></td>
                        <td><?php echo $producto['precio']; ?> €</td>
                        <td><?php echo $producto['cantidad']; ?></td>
                        <td><?php echo $producto['nombre_categoria']; ?></td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>

    <?php else: ?>
        <p>No hay productos disponibles en la base de datos.</p>
        <p><a href='agregar_producto_form.php'>Agregar un nuevo producto</a></p>
    <?php endif; ?>

</body>

</html>