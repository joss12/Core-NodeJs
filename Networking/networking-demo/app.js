const http = require("http")

const port = 65536;
const hostname = "127.0.0.1"

const server = http.createServer((req, res)=>{
    const data = {message: "Hi there!"}


    res.setHeader("Content-Type", "application/json");
    res.setHeader("Connection", "close");
    res.statusCode = 200;
    res.end(JSON.stringify(data));

});

server.listen(port,hostname, ()=>{
    console.log(`Server running on port http://${hostname}:${port}`);
})