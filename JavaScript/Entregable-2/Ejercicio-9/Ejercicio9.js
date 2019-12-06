"use strict";

class Tiempo {
    constructor() {
        this.apikey = "76f930f74c5541522f0143430bceb0ca";
        this.ciudad = "Oviedo";
        this.tipo = "&mode=xml";
        this.unidades = "&units=metric";
        this.idioma = "&lang=es";
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad + this.tipo + this.unidades
            + this.idioma + "&APPID=" + this.apikey;
        this.map = new Map();
        this.cargarDatos();
    }

    cargarDatos() {
        $.ajax({
            dataType: "xml",
            url: this.url,
            method: 'GET',
            success: function (datos) {
                div.append("<h3>XML recibido</h3>");
                div.append("<p id='xml'></p>");
                $("#xml").text((new XMLSerializer()).serializeToString(datos));
                tiempo.datos.set("Total de Nodos", $('*', datos).length);
                tiempo.datos.set("Ciudad", $('city', datos).attr("name"));
                tiempo.datos.set("Longitud", $('coord', datos).attr("lon"));
                tiempo.datos.set("Latitud", $('coord', datos).attr("lat"));
                tiempo.datos.set("País", $('country', datos).text());
                var amanecer = $('sun', datos).attr("rise");
                var minutosZonaHoraria = new Date().getTimezoneOffset();
                var amanecerMiliSeg1970 = Date.parse(amanecer);
                amanecerMiliSeg1970 -= minutosZonaHoraria * 60 * 1000;
                var amanecerLocal = (new Date(amanecerMiliSeg1970)).toLocaleTimeString("es-ES");
                tiempo.datos.set("Amanece a las", (new Date(amanecerMiliSeg1970)).toLocaleTimeString("es-ES"));
                var oscurecer = $('sun', datos).attr("set");
                var oscurecerMiliSeg1970 = Date.parse(oscurecer);
                oscurecerMiliSeg1970 -= minutosZonaHoraria * 60 * 1000;
                tiempo.datos.set("Oscurece a las", (new Date(oscurecerMiliSeg1970)).toLocaleTimeString("es-ES"));
                tiempo.datos.set("Temperatura", $('temperature', datos).attr("value") + " ºC");
                tiempo.datos.set("Temperatura mínima", $('temperature', datos).attr("min") + " ºC");
                tiempo.datos.set("Temperatura máxima", $('temperature', datos).attr("max") + " ºC");
                tiempo.datos.set("Temperatura (unidades)", $('temperature', datos).attr("unit"));
                tiempo.datos.set("Humedad", $('humidity', datos).attr("value") + " " + $('humidity', datos).attr("unit"));
                tiempo.datos.set("Presión", $('pressure', datos).attr("value") + " " + $('pressure', datos).attr("unit"));
                tiempo.datos.set("Velocidad del viento", $('speed', datos).attr("value") + " m/s");
                tiempo.datos.set("Nombre del viento", $('speed', datos).attr("name"));
                tiempo.datos.set("Dirección del viento", $('direction', datos).attr("value") + "º");
                tiempo.datos.set(">Código del viento", $('direction', datos).attr("code"));
                tiempo.datos.set("Nombre del viento", $('direction', datos).attr("name"));
                tiempo.datos.set("Nubosidad", $('clouds', datos).attr("value"));
                tiempo.datos.set("Nombre nubosidad", $('clouds', datos).attr("name"));
                tiempo.datos.set("Visibilidad", $('visibility', datos).attr("value") + " m");
                tiempo.datos.set("Precipitación valor", $('precipitation', datos).attr("value"));
                tiempo.datos.set("Precipitación modo", $('precipitation', datos).attr("mode"));
                tiempo.datos.set("Descripción", $('weather', datos).attr("value"));
                var horaMedida = $('lastupdate', datos).attr("value");
                var horaMedidaMiliSeg1970 = Date.parse(horaMedida);
                horaMedidaMiliSeg1970 -= minutosZonaHoraria * 60 * 1000;
                tiempo.datos.set("Hora de la medida", (new Date(horaMedidaMiliSeg1970)).toLocaleTimeString("es-ES"));
                tiempo.datos.set("Fecha de la medida", (new Date(horaMedidaMiliSeg1970)).toLocaleDateString("es-ES"));
            },
            error: function () {
                alert("¡Tenemos problemas! No puedo obtener XML de OpenWeatherMap");
            }
        });
    }

    mostrarDatos() {
        this.cargarDatos();
        div.empty();
        div.append("<table>");
        $("table").append("<th scope=\"col\" id=\"parametro\">Parámetro</th>");
        $("table").append("<th scope=\"col\" id=\"valor\">Valor</th>");
        var keys = Array.from(this.datos.keys());
        for (var parametro in keys) {
            this.añadirTabla(keys[parametro]);
        }
        div.append("</table>");
    }

    añadirTabla(parametro) {
        $("table").append("<tr>");
        $("table").append("<td headers=\"col\">" + parametro + "</td>");
        $("table").append("<td headers=\"col\">" + this.datos.get(parametro) + "</td>");
        $("table").append("</tr>");
    }
}

var tiempo = new Tiempo();
