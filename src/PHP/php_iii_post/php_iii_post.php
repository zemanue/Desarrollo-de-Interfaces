<!-- Diseña el siguiente formulario, y configura el array $_POST, para que los datos se puedan
recoger y enviar con el método mail:
Nombre: 
Apellidos: 
Telefono:
Email:
Comentarios:

Botones "Enviar" y "Borrar"
-->
<?php

if ($_POST) {
    $nombre = $_POST['nombre'];
    $apellidos = $_POST['apellidos'];
    $telefono = $_POST['telefono'];
    $email = $_POST['email'];
    $comentarios = isset($_POST["comentarios"]) ? $_POST["comentarios"] : '';

    $asunto = "Formulario de contacto: " . $nombre . " " . $apellidos;
    $cuerpo = "Datos del usuario: \n" .
        "Nombre: " . $nombre . "\n" .
        "Apellidos: " . $apellidos . "\n" .
        "Telefono: " . $telefono . "\n" .
        "Email: " . $email . "\n";

    if (!$comentarios == '') {
        $cuerpo .= "Comentarios: " . $comentarios . "\n";
    }

    mail($email, $asunto, $cuerpo);
}