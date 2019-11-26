"use strict";

class Calculator {
    constructor() {
        this.memory = 0;
    }

    display(digit) {
        let display = document.getElementById("pantalla");
        if (display.value === '0') {
            display.value = digit;
        } else {
            display.value += digit;
        }
    }

    cleanDisplay() {
        const display = document.getElementById("pantalla");
        display.value = "0";
        this.memory = 0;
    }

    result() {
        try {
            const display = document.getElementById("pantalla");
            display.value = eval(display.value);
            this.memory = 0;
        } catch (e) {
            alert('A DONDE VAAAS JOSE LUIS');
        }
    }

    addMemory() {
        try {
            const display = document.getElementById("pantalla");
            this.memory += eval(display.value);
            this.cleanDisplay();
        } catch (e) {
            alert('A DONDE VAAAS JOSE LUIS')
        }
    }

    minusMemory() {
        try {
            const display = document.getElementById("pantalla");
            this.memory -= eval(display.value);
            this.cleanDisplay();
        } catch (e) {
            alert('A DONDE VAAAS JOSE LUIS')
        }
    }

    showMemory() {
        const display = document.getElementById("pantalla");
        display.value = this.memory;
        this.memory = 0;
    }
}

class ScientificCalculator extends Calculator {
    constructor() {
        super();
        this.resultado = 0;
    }

    guardarPantalla() {
        const display = document.getElementById("pantalla");
        this.resultado = eval(display.value);
    }

    cambioSigno() {
        this.guardarPantalla();
        this.resultado *= -1;
        this.actualizarPantalla();
    }

    actualizarPantalla() {
        const display = document.getElementById("pantalla");
        display.value = this.resultado;
    }

    factorial() {
        this.guardarPantalla();
        this.resultado = this.factorialRecursivo(this.resultado);
        this.actualizarPantalla();
    }

    factorialRecursivo(n) {
        try {
            if (n === 0) {
                return 1;
            }
            return n * this.factorialRecursivo(n - 1);
        } catch (e) {
            return Infinity;
        }
    }

    displayPi() {
        const display = document.getElementById("pantalla");
        const result = eval('' + Math.PI);
        if (display.value === '0') {
            display.value = result;
        } else {
            display.value += result;
        }
    }

    cleanDisplayPartial() {
        const display = document.getElementById("pantalla");
        display.value = display.value.substring(0, display.value.length - 1);
    }

    cleanDisplayCE() {
        const display = document.getElementById("pantalla");
        const limit = display.value.length - 1;
        for (let i = limit; i >= 0; i--) {
            let value = display.value[i];
            if (/^([^0-9]*)$/.test(value)) {
                display.value = display.value.substring(0, i);
                break;
            }
        }
    }

    exponencial() {
        this.guardarPantalla();
        this.resultado = Math.exp(this.resultado);
        this.actualizarPantalla();
    }

    logaritmo() {
        this.guardarPantalla();
        this.resultado = Math.log2(this.resultado);
        this.actualizarPantalla();
    }

    powY() {
        this.guardarPantalla();
        let y = prompt('Indique el número al cual quiere elevar', '2');
        if (isNaN(Number(y))) {
            alert('El número no es válido');
        } else {
            this.resultado = Math.pow(this.resultado, Number(y));
            this.actualizarPantalla();
        }
    }
}

let calculator = new ScientificCalculator();