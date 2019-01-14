const express = require('express');
const http = require('http');
const path = require('path');
const SocketIO = require('socket.io');

const app = express();
let server = http.createServer(app);
const pathPublic = path.resolve(__dirname,'../client');

app.use(express.static(pathPublic));
const port = process.env.PORT || 3000;
const io = SocketIO(server);
//require('./socket/socket_config');

server.listen(port, (error) => {
    if (error){
        throw new Error(error);
    }
    console.log(`El Servidor esta funcionando => ${port}`);
});

io.on('connection',(client)=>{
    console.log('Cliente on line',client.id);


    client.on('disconnection',()=>{
    console.log('Cliente off line');
  });
  client.on('enviarMensaje',(data) =>{
   // console.log(data);
    io.sockets.emit('enviarMensaje',data);
  });

  client.on('enviadoMensaje',(data) =>{
    client.broadcast.emit('enviadoMensaje',data);
   });
   
});