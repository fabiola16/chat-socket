var socket=io();
socket.on('connect',() => {  //socket encendido se conectara al servidor
    console.log('servidor socket on line');
});

socket.on('disconnect',() => {  //socket apagado se desconectara al servidor
    console.log('servidor socket off line');
  });
  //socket.emit('enviarMensaje','hola mundo');


//elements DOM
let username = document.getElementById('username');
let mensaje = document.getElementById('mensaje');
let btn = document.getElementById('enviar');
let output = document.getElementById('output');
let action = document.getElementById('action');

btn.addEventListener('click', () => {
  
    socket.emit('enviarMensaje',{
        
        username: username.value,
        mensaje: mensaje.value
    });   
});

mensaje.addEventListener('keypress', () =>{
    socket.emit('enviadoMensaje',username.value);
});

socket.on('enviarMensaje', (data) =>{
    output.innerHTML += `<p>
    <strong>${data.username}</strong>: ${data.mensaje}
    </p>`
});

socket.on('enviadoMensaje', (data) =>{
    action.innerHTML = '';
    action.innerHTML += `<p><em>${data} esta escribiendo </em>
    </p>`
});