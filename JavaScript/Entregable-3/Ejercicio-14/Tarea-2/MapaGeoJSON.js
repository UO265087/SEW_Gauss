'use strict';
class MapaKML {
    constructor() {
        
    }

    iniciar() {
        var archivo = document.getElementById("subirArchivos").files[0];
        
        console.log(archivo);
        if (archivo.name.includes('.geoJSON')) {
            var lector = new FileReader();
            lector.onloadend = function (evento) {
                var map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 11,
                    center:{lat: 43.30, lng: -5.9}
                });
                var geojson = JSON.parse(lector.result);
                console.log(geojson);
                map.data.addGeoJson(geojson);
                
            }
            lector.readAsText(archivo);
        }
        else {
            alert("Error : ¡¡¡ Archivo no válido !!!");
        }
    }
}
var mapa = new MapaKML();





