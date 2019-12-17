<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8"/>
    <meta name="author" content="Iván González Mahagamage"/>
    <meta name="description" content="Ejercicio 3 de la práctica 06 asignatura Software y Estándares para la Web"/>
    <meta name="keywords" content="SEW,Práctica06,ejercicio3,Software,Estándares,Web"/>
    <title>Práctica 06 | Software y Estándares para la Web</title>
    <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css?family=Titillium+Web" rel="stylesheet"/>
    <link rel="stylesheet" type="text/css" href="CalculadoraBasica.css"/>
</head>
<body>
<header>
    <h1>Calculadora Básica</h1>
</header>
<main>
    <?php
    require 'Calculator.php';
    $calculator = new Calculator();
    ?>
    <form>
        <p>
            <?php
            echo '<input type="text" id="pantalla" value="' . $calculator->getDisplay() . '" disabled/>';
            ?>

        </p>
        <p>
            <input type="submit" class="memory" value="mrc" onclick="calculator.showMemory()"/>
            <input type="submit" class="memory" value="m-" onclick="calculator.minusMemory()"/>
            <input type="submit" class="memory" value="m+" onclick="calculator.addMemory()"/>
            <input type="submit" class="operation" value="/" name="display"/>
        </p>
        <p>
            <input type="submit" class="number" value="7" name="display"/>
            <input type="submit" class="number" value="8" name="display"/>
            <input type="submit" class="number" value="9" name="display"/>
            <input type="submit" class="operation" value="*" name="display"/>
        </p>
        <p>
            <input type="submit" class="number" value="4" name="display"/>
            <input type="submit" class="number" value="5" name="display"/>
            <input type="submit" class="number" value="6" name="display"/>
            <input type="submit" class="operation" value="-" name="display"/>
        </p>
        <p>
            <input type="submit" class="number" value="1" name="display"/>
            <input type="submit" class="number" value="2" name="display"/>
            <input type="submit" class="number" value="3" name="display"/>
            <input type="submit" class="operation" value="+" name="display"/>
        </p>
        <p>
            <input type="submit" class="number" value="0" name="display"/>
            <input type="submit" class="number" value="." name="display"/>
            <input type="submit" class="number" value="C" name="display"/>
            <input type="submit" class="operation" value="=" name="display"/>
        </p>
    </form>
    <p></p>
    <p></p>
    <p></p>
</main>
<footer>
    <address>
        <p>Autor: Iván González Mahagamage</p>
        <p>Contacto: <a href="mailto:uo239795@uniovi.es">uo239795@uniovi.es</a></p>
    </address>
    <p>
    </p>
</footer>
</body>
