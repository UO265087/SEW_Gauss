"use strict";

class Geolocalizacion {
    constructor() {
        this.inicializar();
    }

    inicializar() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                this.mostrar.bind(this), this.errores.bind(this));
        } else {
            alert("Geolocación no es soportada por navegador.");
        }
    }

    errores(error) {
        alert('Error: ' + error.code + ' ' + error.message);
    }

    mostrar() {
        const localizacion = {
            lat: 43.362114,
            lng: -5.847994
        };
        const map = new google.maps.Map($('main')[0],
            {
                zoom: 17,
                center: localizacion
            }
        );
        const marker = new google.maps.Marker({
            position: localizacion,
            map: map
        });
    }
}

const geolocalizacion = new Geolocalizacion();