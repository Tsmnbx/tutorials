var http = require('http');
var fs = require('fs');
var port = process.argv[2];
var file = process.argv[3];

http.createServer(function(req, res) {
    fs.createReadStream(file, {encoding: 'utf8'}).pipe(res);
}).listen(port);

// Offical solution
/*
var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' })

  fs.createReadStream(process.argv[3]).pipe(res)
})

server.listen(Number(process.argv[2]))
*/
