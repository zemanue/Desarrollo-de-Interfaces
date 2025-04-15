<?php

$hostname = "localhost";
$username = "root";
$password = "";
$database = "inventario_tienda";

$conexion = mysqli_connect($hostname, $username, $password, $database);

if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}
