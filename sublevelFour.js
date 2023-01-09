// Taran Roth, pd. 7-8 Even, Level 8: Enhanced Web Server

var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer((req, res) => {
    var pathname = url.parse(req.url).pathname.substring(1);
    console.log(`Request for ${pathname} received`);
    fs.readFile(pathname, (err, data) => {
        if (err) {
            console.log(err);
            res.writeHead(404, {'Content-Type': 'text/html'});
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data.toString());
        }
        res.end();
    })
}).listen(8081);

console.log(`Server running at http://localhost:8081`)