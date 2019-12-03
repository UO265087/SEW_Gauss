"use strict";

class Geolocalizacion {
    constructor() {
        this.map = new Map();
        this.inicializar();
    }

    inicializar() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                this.obtener.bind(this), this.errores.bind(this));
        } else {
            alert("Geolocación no es soportada por navegador.");
        }
    }

    obtener(posicion) {
        this.map.set('accuracy', posicion.coords.accuracy);
        this.map.set('altitude', posicion.coords.altitude);
        this.map.set('altitudeAccuracy', posicion.coords.altitudeAccuracy);
        this.map.set('heading', posicion.coords.heading);
        this.map.set('latitude', posicion.coords.latitude);
        this.map.set('longitude', posicion.coords.longitude);
        this.map.set('speed', posicion.coords.speed);
        this.mostrar();
    }

    errores(error) {
        alert('Error: ' + error.code + ' ' + error.message);
    }

    mostrar() {
        const main = $("main");
        main.append("<table>");
        const keys = Array.from(this.map.keys());
        main.append("<th scope='col' id='parametro'>Valor</th>");
        main.append("<th scope='col' id='valor'>Parametro</th>");
        for (let param in keys) {
            main.append("<tr>");
            main.append("<td headers='col'>" + keys[param] + "</td>");
            main.append("<td headers='col'>" + this.map.get(keys[param])
                + "</td>");
            main.append("</tr>");
        }
        main.append("</table>");
    }
}

const geolocalizacion = new Geolocalizacion();