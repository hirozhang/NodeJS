var circle = require('./2.circle.js');
		   
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});	//plain
  res.write('<p style="color:#f00;">The area of a circle of radius 4 is '
           + circle.area(4) +'</p>\n');
  res.end('The circumference of a circle of radius 4 is '
           + circle.circumference(4) +'\n');
}).listen(1219, "127.0.0.1");

console.log( 'The area of a circle of radius 4 is '
           + circle.area(4));
console.log( 'The circumference of a circle of radius 4 is '
           + circle.circumference(4));
console.log('Server running at http://127.0.0.1:1219/');