const fs = require('fs');

class Ticket {
    constructor(numero, escirtorio) {
        this.numero = numero;
        this.escirtorio = escirtorio;
    }
}



class TicketControl {
    constructor() {
        this.ultimo = 0;
        this.hoy = new Date().getDate();
        this.tickets = [];

        let data = require('../data/data.json')

        if (data.hoy === this.hoy) {
            this.ultimo = data.ultimo;
            this.tickets = data.tickets;
        } else {
            this.reiniciarConteo();
        }
    }

    siguiente() {
        this.ultimo += 1;

        let ticket = new Ticket(this.ultimo, null);
        this.tickets.push(ticket);

        this.grabarCambios();
        return `Ticket ${this.ultimo}`;
    }

    getTicketActual() {
        return `Ticket ${this.ultimo}`;
    }

    reiniciarConteo() {
        this.ultimo = 0;
        this.tickets = [];
        console.log('Se ha iniciado el sistema');
        this.grabarCambios();
    }

    grabarCambios() {
        let jsonData = {
            ultimo: this.ultimo,
            hoy: this.hoy,
            tickets: this.tickets
        }
        let jsonDataString = JSON.stringify(jsonData)
        fs.writeFileSync('./server/data/data.json', jsonDataString);
    }

}

module.exports = { TicketControl }