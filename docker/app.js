var http = require("http");
var sleep = require("system-sleep");
var os= require("os");

var hostname = os.hostname();

http.createServer(function(request, response ) {
	sleep(1);
	response.writeHead(200, {'Content-type':'text/plain'});
	response.end("This is swarm server and hostname is " + hostname);
}).listen(8088);

console.log("This is node app run on server with hostname " + hostname);
