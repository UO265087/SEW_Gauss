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
        const localizacion = {
            lat: this.map.get("Latitud"),
            lng: this.map.get("Longitud")
        };
        const map = new google.maps.Map(document.getElementsByTagName('main')[0],
            {
                zoom: 15,
                center: localizacion
            }
        );
        var marker = new google.maps.Marker({
            position: localizacion,
            map: map
        });
    }
}

const geolocalizacion = new Geolocalizacion();