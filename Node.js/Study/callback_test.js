var http = require('http');

var server = http.createServer(function(request, response){
    response.writeHead(200, {"Content-type":"text/plain"});
    response.write("Hello World\n");
    response.end();
});

var callbackfunc2 = function(){
    console.log("1st callback Started");
}

server.listen(9999, callbackfunc2);

function callbackfunc(){
    console.log("1st callback Started");
}