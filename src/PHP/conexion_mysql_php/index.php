<!-- Tarea Mysql y PHP
1. Base de datos en MariaDB
Diseña una base de datos llamada inventario_tienda con las siguientes tablas:
1. Tabla: productos
o Campos:
▪ id_producto: INT (clave primaria, auto incremental).
▪ nombre: VARCHAR(255) (nombre del producto).
▪ descripcion: TEXT (detalles del producto).
▪ precio: DECIMAL(10,2) (precio del producto).
▪ cantidad: INT (cantidad en inventario).
2. Tabla: categorias
o Campos:
▪ id_categoria: INT (clave primaria, auto incremental).
▪ nombre: VARCHAR(255) (nombre de la categoría).
3. Relación entre productos y categorías
o Los productos deben estar asociados a una categoría mediante una clave
foránea id_categoria.
2. Backend en PHP
Desarrolla el backend para interactuar con la base de datos. Debe incluir las siguientes
funcionalidades:
1. Agregar un nuevo producto
o Implementa un formulario en HTML para capturar los datos del producto
y almacenarlos en la base de datos utilizando una consulta SQL.
2. Listar productos
o Crea una página PHP que muestre todos los productos en una tabla con
datos como nombre, precio, cantidad y categoría.
3. Actualizar información de un producto
o Permite modificar el precio o la cantidad de un producto a través de un
formulario.
4. Eliminar un producto
o Implementa una función que permita borrar un producto específico
utilizando su id_producto.
3. Frontend básico
Crea una interfaz simple utilizando HTML y CSS para permitir interacción con el
sistema. Asegúrate de que los formularios sean fáciles de usar y claros. -->

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conexion MySQL y PHP</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <h1>Bienvenido/a al Sistema de Gestión de Productos</h1>
    <p>Por favor, escoge una de las opciones disponibles</p>
    <ul>
        <li><a class="boton" href="agregar_producto_view.html">Agregar un nuevo producto</a></li>
        <li><a class="boton" href="listar_productos.php">Listar Productos</a></li>
        <li><a class="boton" href="actualizar_producto_elegir.php">Actualizar Producto</a></li>
        <li><a class="boton" href="eliminar_producto_elegir.php">Eliminar Producto</a></li>
    </ul>
</body>

</html>