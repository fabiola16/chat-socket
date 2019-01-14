const {io} = require('../server');

io.on('connection',(client)=>{
    console.log('Cliente on line');


    client.on('disconnection',()=>{
    console.log('Cliente off line');
  });
  client.on('enviarMensaje',(data)=>{
    console.log(data);
  });
  
});
