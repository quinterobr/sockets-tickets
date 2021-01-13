var socket = io();
var label = $('#lblNuevoTicket');

socket.on('connect', function() { //Comando para establecer la conexión
    console.log('concetado al servidor');
});

socket.on('estadoActual', function(resp) {
    label.text(resp.actual);
});

socket.on('disconnect', function() { //Cuando se pierde la conexión con el servidor
    console.log('Se perdio conexion con el servidor');
});

$('button').on('click', function() {
    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });
});