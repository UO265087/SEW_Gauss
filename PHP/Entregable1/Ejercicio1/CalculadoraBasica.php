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
    session_start();

    class CalculadoraBasica
    {
        private $memory;
        private $display;

        /**
         * CalculadoraBasica constructor.
         */
        public function __construct()
        {
            $this->memory = 0;
            $this->display = '';
        }

        /**
         * @return string
         */
        public function getDisplay(): string
        {
            return $this->display;
        }

        public function display($digit)
        {
            if ($this->display === '0') {
                $this->display = $digit;
            } else {
                $this->display .= $digit;
            }
        }

        public function cleanDisplay()
        {
            $this->display = "0";
        }

        public function result()
        {
            try {
                $this->display = eval("return $this->display;");
                $this->memory = 0;
            } catch (Exception $e) {
                echo '<script>alert("A DONDE VAAAS JOSE LUIS")</script>';
            }
        }

        public function addMemory()
        {
            try {
                $this->memory += eval("return $this->display;");
                $this->cleanDisplay();
            } catch (Exception $e) {
                echo '<script>alert("A DONDE VAAAS JOSE LUIS")</script>';
            }
        }

        public function minusMemory()
        {
            try {
                $this->memory -= eval("return $this->display;");
                $this->cleanDisplay();
            } catch (Exception $e) {
                echo '<script>alert("A DONDE VAAAS JOSE LUIS")</script>';
            }
        }

        public function showMemory()
        {
            try {
                $this->display = $this->memory;
                $this->memory = 0;
            } catch (Exception $e) {
                echo '<script>alert("A DONDE VAAAS JOSE LUIS")</script>';
            }
        }
    }

    if (!isset($_SESSION['calculator'])) {
        $_SESSION['calculator'] = new CalculadoraBasica();
    }
    $calculator = $_SESSION['calculator'];

    if ($_GET) {
        if (isset($_GET["display"]) && "" != $_GET["display"]) {
            switch ($_GET["display"]) {
                case 'mrc':
                    $calculator->showMemory();
                    break;
                case 'm-':
                    $calculator->minusMemory();
                    break;
                case 'm+':
                    $calculator->addMemory();
                    break;
                case '=':
                    $calculator->result();
                    break;
                case 'C':
                    $calculator->cleanDisplay();
                    break;
                default:
                    $calculator->display($_GET["display"]);
            }
        }
    }
    ?>
    <form>
        <p>
            <?php
            echo '<input type="text" id="pantalla" value="' . $calculator->getDisplay() . '" disabled/>'
            ?>
        <p>
            <input type="submit" class="memory" value="mrc" name="display"/>
            <input type="submit" class="memory" value="m-" name="display"/>
            <input type="submit" class="memory" value="m+" name="display"/>
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
</footer>
</body>
