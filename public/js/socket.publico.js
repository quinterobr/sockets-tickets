var socket = io();

var lblTicket1 = $('#lblTicket1');
var lblTicket2 = $('#lblTicket2');
var lblTicket3 = $('#lblTicket3');
var lblTicket4 = $('#lblTicket4');

var lblEscritorio1 = ('#lblEscritorio1');
var lblEscritorio2 = ('#lblEscritorio2');
var lblEscritorio3 = ('#lblEscritorio3');
var lblEscritorio4 = ('#lblEscritorio4');

var lblTickets = [lblTicket1, lblTicket2, lblTicket3, lblTicket4];
var lblEscritorios = [lblEscritorio1, lblEscritorio2, lblEscritorio3, lblEscritorio4];

socket.on('connect', function() { //Comando para establecer la conexión
    console.log('concetado al servidor');
});

socket.on('disconnect', function() { //Cuando se pierde la conexión con el servidor
    console.log('Se perdio conexion con el servidor');
});

socket.on('estadoActual', function(data) {
    console.log(data);
    actualizarHTML(data.ultimos4);
});

socket.on('ultimos4', function(data) {

    var audio = new Audio('audio/new-ticket.mp3');
    audio.play();

    actualizarHTML(data.ultimos4);
});

function actualizarHTML(ultimos4) {
    ultimos4.forEach((element, index) => {
        $(`#lblTicket${index+1}`).text("Ticket " + element.numero);
        $(`#lblEscritorio${index+1}`).text("Escritorio " + element.escritorio);
    });
}