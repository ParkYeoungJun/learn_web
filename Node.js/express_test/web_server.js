/*
 *	test http module
 */

const http = require('http');
const hostname = '127.0.0.1';
const port = 1337;

http.createServer(function(req, res){
		res.writeHead(200, { 'Content-Type' : 'text/plain' });
		res.end('Hello World\n');
}).listen(port, hostname, function(){   // listen이 완료되면 callback함수 작동
		console.log("Server running at http://" + hostname + ":"+port+"/");
});

 // == var server = http.createServer();
 //    server.listen();
