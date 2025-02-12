const net = require('net')

const server = net.createServer((socket)=>{
   socket.on('data', (data)=>{
    console.log(data)
   })
})


server.listen(8000, "::", ()=>{
    console.log("Opened server on", server.address())
})