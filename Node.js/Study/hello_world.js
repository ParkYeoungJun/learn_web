var http = require('http');

var server = http.createServer(responseSetting);

function responseSetting(request, response){
    response.writeHead(200, {"Content-type":"text/plain"});
    response.write("Hello World\n");
    response.write("Hi");
    response.end();
}

server.listen(9999, addLog);

function addLog(){
    console.log("server open success : 9999");
}