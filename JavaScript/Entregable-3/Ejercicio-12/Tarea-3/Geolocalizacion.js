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
        geolocalizacion.map.set('accuracy', posicion.coords.accuracy);
        geolocalizacion.map.set('altitude', posicion.coords.altitude);
        geolocalizacion.map.set('altitudeAccuracy', posicion.coords.altitudeAccuracy);
        geolocalizacion.map.set('heading', posicion.coords.heading);
        geolocalizacion.map.set('latitude', posicion.coords.latitude);
        geolocalizacion.map.set('longitude', posicion.coords.longitude);
        geolocalizacion.map.set('speed', posicion.coords.speed);
        geolocalizacion.mostrar();
    }

    errores(error) {
        alert('Error: ' + error.code + ' ' + error.message);
    }


    mostrar() {
        const ubicacion = $('main')[0];
        const apiKey = "&key=API_KEY";
        const url = "https://maps.googleapis.com/maps/api/staticmap?";
        const centro = "center=" + this.map.get('latitude') + "," + this.map.get('longitude');
        const zoom = "&zoom=15";
        const dimension = "&size=800x600";
        const marcador = "&markers=color:red%7Clabel:S%7C" + this.map.get('latitude') + "," + this.map.get('longitude');
        const sensor = "&sensor=false";
        const imagenMapa = url + centro + zoom + dimension + marcador
            + sensor + apiKey;
        ubicacion.innerHTML = "<img src='" + imagenMapa + "'/>";
    }
}

const geolocalizacion = new Geolocalizacion();
