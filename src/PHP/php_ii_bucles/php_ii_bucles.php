<!-- Descripción: Vas a desarrollar un script en PHP que solicite al usuario un número entero positivo
y, con base en ese número, genere y muestre la tabla de multiplicación correspondiente.
Además, el programa debe incluir validaciones para asegurarse de que el valor ingresado sea
válido.
Requisitos del Ejercicio:
• Solicita al usuario que ingrese un número entero positivo mediante un formulario HTML
o por consola (según prefieras).
• Valida la entrada del usuario:
• Si el valor ingresado no es un número entero positivo, muestra un mensaje de error y
detén la ejecución del programa.
• Usa un bucle para generar la tabla de multiplicación (del 1 al 10).
• Usa una estructura condicional para destacar visualmente (por ejemplo, con un mensaje
diferente) los resultados que son múltiplos de 5.
-->

<?php

if ($_POST) {
    $numero = $_POST['numero'];

    if ($numero < 0) {
        echo "El número debe ser positivo.";
    } else {
        for ($i = 0; $i < 10; $i++) {
            
            $producto = $numero * ($i + 1);
            echo $numero . " x " . ($i + 1) . " = " . $producto;

            if ($producto % 5 == 0) {
                echo " ¡Múltiplo de 5! ";
            } 

            echo "<br>";
        }
    }
}