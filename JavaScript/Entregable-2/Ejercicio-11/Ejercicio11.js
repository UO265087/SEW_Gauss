"use strict";

class Tiempo {
    constructor() {
        this.apikey = "47b790fd0fc41878c80c57c9846132cb";
        this.unidades = "&units=metric";
        this.idioma = "&lang=es";
        this.map = new Map();
    }

    modificarCiudad(ciudad) {
        this.ciudad = ciudad;
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad
            + this.unidades + this.idioma + "&APPID=" + this.apikey;
    }

    cargarDatos() {
        this.modificarCiudad($("#ciudad").val());
        $("#mostrar").prop("disabled", false);
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: (datos) => {
                const div = $("#contenido");
                div.empty();
                div.prepend("<p>" + JSON.stringify(datos, null, 2) + "</p>");
                div.prepend("<h3>JSON recibido</h3>");
                this.map.set("Ciudad", datos.name);
                this.map.set("Pais", datos.sys.country);
                this.map.set("Latitud", datos.coord.lat);
                this.map.set("Temperatura", datos.main.temp + " ºC");
                this.map.set("Temperatura máxima", datos.main.temp_max + " ºC");
                this.map.set("Temperatura mínima", datos.main.temp_min + " ºC");
                this.map.set("Presión", datos.main.pressure + " milibares");
                this.map.set("Humedad", datos.main.humidity + " %");
                this.map.set("Amanece", new Date(datos.sys.sunrise * 1000).toLocaleTimeString());
                this.map.set("Oscurece", new Date(datos.sys.sunset * 1000).toLocaleTimeString());
                this.map.set("Direccion del viento", datos.wind.deg + "º");
                this.map.set("Velocidad del viento", datos.wind.speed + " m/s");
                this.map.set("Hora", new Date(datos.dt * 1000).toLocaleTimeString());
                this.map.set("Fecha", new Date(datos.dt * 1000).toLocaleDateString());
                this.map.set("Descripción", datos.weather[0].description);
                this.map.set("Visibilidad", datos.visibility + " m");
                this.map.set("Nubosidad", datos.clouds.all);
                this.mostrarDatos();
            },
            error: function () {
                alert("¡Tenemos problemas! No puedo obtener JSON de OpenWeatherMap");
            }
        });
    }

    mostrarDatos() {
        $("#contenido").append("<table>");
        $("table").append("<th scope=\"col\" id=\"parametro\">Parámetro</th>");
        $("table").append("<th scope=\"col\" id=\"valor\">Valor</th>");
        var keys = Array.from(this.map.keys());
        for (var parametro in keys) {
            this.agregarTabla(keys[parametro]);
        }
        $("section").append("</table>");
        $("#mostrar").prop("disabled", true);
    }

    agregarTabla(parametro) {
        $("table").append("<tr>");
        $("table").append("<td headers=\"col\">" + parametro + "</td>");
        $("table").append("<td headers=\"col\">" + this.map.get(parametro) + "</td>");
        $("table").append("</tr>");
    }
}

const tiempo = new Tiempo();
