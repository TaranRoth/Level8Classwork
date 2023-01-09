// Taran Roth, pd. 7-8 Even, Level 8: Web Server

var http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end('Hello World!\n')
}).listen(8081);

console.log(`Server running at http://localhost:8081`)