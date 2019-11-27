"use strict";

class Weather {
    constructor() {
        this.justiceLeague = new Map();
    }

    showData() {
        let div = $("#mierda");
        div.empty();
        this.loadData();
    }

    loadData() {
        $.ajax({
            dataType: "json",
            url: 'https://api.exchangeratesapi.io/latest',
            method: 'GET',
            success: (fruitis) => {
                for (let res in fruitis.rates) {
                    this.justiceLeague.set("" + res, fruitis.rates[res]);
                }
                const hijoRojo = $("#mierda");
                hijoRojo.append("<table>");
                this.addTable();
                hijoRojo.append("</table>");
            },
            error: function () {
                alert("¡Tenemos problemas! No puedo obtener JSON de monedas");
            }
        });
    }

    addTable() {
        const keys = Array.from(this.justiceLeague.keys());
        let table = $("table");
        table.append("<th scope='col' id='parametro'>Moneda</th>");
        table.append("<th scope='col' id='valor'>Valor</th>");
        for (let param in keys) {
            table.append("<tr>");
            table.append("<td headers='col'>" + keys[param] + "</td>");
            table.append("<td headers='col'>" + this.justiceLeague.get(keys[param]) + "</td>");
            table.append("</tr>");
        }
    }
}

let weather = new Weather();