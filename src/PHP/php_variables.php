<!-- Diseña un documento PHP, para crear variables  de diferente tipo. Muestra los valores por pantalla. -->
<!DOCTYPE html>
<html>

<head>
    <title>Variables</title>
</head>

<body>
    <?php
    $nombre = "Juan";       //string
    $edad = 20;             //integer
    $altura = 1.75;         //float
    $estudiante = true;     //boolean
    $nulo = null;           //null
    $notas = array(9.1, 6, 7.7, "no presentado");       //array         
    $asignaturas = (object) array('1' => 'Acceso a Datos', '2' => 'Desarrollo de interfaces', '3' => 'Android');         //object
    $conexion = mysqli_connect("localhost", "usuario", "1234", "basededatos");   //resource
    
    // Imprimir los valores de las variables
    echo "Nombre: " . $nombre . "<br>";
    echo "Edad: " . $edad . "<br>";
    echo "Altura: " . $altura . "<br>";
    echo "Estudiante: " . ($estudiante ? "Sí" : "No") . "<br>";
    echo "Valor nulo: " . (is_null($nulo) ? "Es null" : $nulo) . "<br>";    
    echo "Notas: " . $notas[0] . ", " . $notas[1] . ", " . $notas[2] . ", " . $notas[3] . "<br>";
    echo "Asignaturas: " . $asignaturas->{'1'} . ", " . $asignaturas->{'2'} . ", " . $asignaturas->{'3'} . "<br>";
    if ($conexion) {
        echo "Conexión a la base de datos: Exitosa<br>";
    } else {
        echo "Conexión a la base de datos: Fallida<br>";
    }
    ?>
</body>

</html>