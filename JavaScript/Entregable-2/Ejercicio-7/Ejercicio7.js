"use strict";

class Weather {
    constructor() {
        this.apikey = "76f930f74c5541522f0143430bceb0ca";
        this.ciudad = "Oviedo";
        this.codigoPais = "ES";
        this.unidades = "&units=metric";
        this.idioma = "&lang=es";
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad + "," + this.codigoPais
            + this.unidades + this.idioma + "&APPID=" + this.apikey;
        this.map = new Map();
    }

    loadData() {
        const that = this;
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function (datos) {
                let div = $("div");
                div.prepend("<p>" + JSON.stringify(datos, null, 2) + "</p>");
                div.prepend("<h3>JSON recibido</h3>");
                that.map.set("Ciudad", datos.name);
                that.map.set("Pais", datos.sys.country);
                that.map.set("Latitud", datos.coord.lat);
                that.map.set("Temperatura", datos.main.temp + " ºC");
                that.map.set("Temperatura máxima", datos.main.temp_max + " ºC");
                that.map.set("Temperatura mínima", datos.main.temp_min + " ºC");
                that.map.set("Presión", datos.main.pressure + " milibares");
                that.map.set("Humedad", datos.main.humidity + " %");
                that.map.set("Amanece", new Date(datos.sys.sunrise * 1000).toLocaleTimeString());
                that.map.set("Oscurece", new Date(datos.sys.sunset * 1000).toLocaleTimeString());
                that.map.set("Direccion del viento", datos.wind.deg + "º");
                that.map.set("Velocidad del viento", datos.wind.speed + " m/s");
                that.map.set("Hora", new Date(datos.dt * 1000).toLocaleTimeString());
                that.map.set("Fecha", new Date(datos.dt * 1000).toLocaleDateString());
                that.map.set("Descripción", datos.weather[0].description);
                that.map.set("Visibilidad", datos.visibility + " m");
                that.map.set("Nubosidad", datos.clouds.all);
            },
            error: function () {
                alert("¡Tenemos problemas! No puedo obtener JSON de OpenWeatherMap");
            }
        });
    }

    showData() {
        let div = $("div");
        div.empty();
        this.loadData();
        div.append("<table>");
        let keys = Array.from(this.map.keys());
        this.addTable(keys);
        div.append("</table>");
    }

    addTable(keys) {
        let table = $("table");
        table.append("<th scope=\"col\" id=\"parametro\">Parámetro</th>");
        table.append("<th scope=\"col\" id=\"valor\">Valor</th>");
        for (let param in keys) {
            table.append("<tr>");
            table.append("<td headers=\"col\">" + keys[param] + "</td>");
            table.append("<td headers=\"col\">" + this.map.get(keys[param]) + "</td>");
            table.append("</tr>");
        }

    }
}

let weather = new Weather();
weather.showData();