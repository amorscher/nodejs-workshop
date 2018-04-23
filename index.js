const http = require('http');

const server = http.createServer((request,response)=>{
    response.end('Hello Client');
});

server.listen(8080,()=>{
 console.log('Server is listening to http://localhost:8080');
});