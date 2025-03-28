<!-- Tarea PHP
Objetivo: Desarrollar un programa en PHP que use estructuras condicionales (if, else if, else y
switch) para determinar la calificación de un estudiante según su nota numérica.

Descripción: Vas a crear un script en PHP que reciba como entrada la nota de un estudiante (un
número entre 0 y 100) e indique su calificación en términos de letras (A, B, C, D, F) siguiendo la
escala estándar:
A: 90 - 100
B: 80 - 89
C: 70 - 79
D: 60 - 69
F: 0 - 59

Requisitos:
Utiliza una estructura condicional if-else para evaluar la nota y determinar la calificación.
Incluye un manejo de errores básico:
Si la nota ingresada no es un número válido entre 0 y 100, muestra un mensaje indicando que los
datos no son correctos.
(Opcional) Usa la estructura switch para manejar un mensaje adicional relacionado con la
calificación:
Por ejemplo: "¡Excelente!" para una A, "Buen trabajo" para una B, y así sucesivamente.
-->
<?php


if (!$_POST) {
    echo "Introduce una nota para saber la calificación";
    exit;

} else {
    echo "Se ha introducido una nota<br>";
        $nota = $_POST["nota"];

        if ($nota < 0 || $nota > 100) {
        echo "La nota introducida no es válida. Debe ser un número entre 0 y 100";
        exit;
    } 

        echo "Tu nota es: <br>";
    if ($nota >= 90 && $nota <= 100) {
        echo "A: ¡Excelente!";
    } elseif ($nota >= 80 && $nota <= 89) {
        echo "B<br>Buen trabajo";
    } elseif ($nota >= 70 && $nota <= 79) {
        echo "C<br>Suficiente";
    } elseif ($nota >= 60 && $nota <= 69) {
        echo "D<br>Necesitas mejorar";
    } elseif ($nota >= 0 && $nota <= 59) {
        echo "F<br>Has suspendido";
    }

}

