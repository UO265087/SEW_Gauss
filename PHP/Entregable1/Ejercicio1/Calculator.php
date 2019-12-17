<?php


class Calculator
{
    public $display;
    private $memory;

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


    public function setDisplay(): void
    {
        if (isset($_POST['submit']) && count($_GET) > 0) {
            if ($this->display === '0') {
                $this->display = $_GET['display'];
            } else {
                $this->display .= $_GET['display'];
            }
        }

    }
}


function setDisplay(): void
{
    if (isset($_POST['submit']) && count($_GET) > 0) {
        $calculator = new Calculator();
        if ($calculator->display === '0') {
            $calculator->display = $_GET['display'];
        } else {
            $calculator->display .= $_GET['display'];
        }
    }

}