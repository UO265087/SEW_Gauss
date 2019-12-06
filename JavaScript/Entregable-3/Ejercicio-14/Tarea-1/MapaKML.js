'use strict';

class MapaKML {
    constructor() {
    }

    init() {
        const archivo = this.files = document.getElementById('files').files[0];
        const tipoXml = /^[0-9a-zA-Z]+.kml$/;
        if (archivo.name.match(tipoXml)) {
            const reader = new FileReader();
            reader.onload = () => {
                const map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 12,
                });
                const geoXml = new geoXML3.parser({map: map});
                geoXml.parseKmlString(reader.result);
            };
            reader.readAsText(archivo);
        } else {
            alert("Error : ¡Archivo no válido!");
        }
    }
}

const map = new MapaKML();





