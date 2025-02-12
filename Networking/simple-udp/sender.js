const dgram = require('dgram');

const sender = dgram.createSocket({type:"udp4", sendBufferSize: 20000});

sender.send("This is a string: ", 8000, "127.0.0.1", (error, bytes)=>{
    if(error)console.log(error);
    console.log(bytes)
})

