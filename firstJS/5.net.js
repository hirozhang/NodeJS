var net = require('net');

net.createServer(function(stream) {
	stream.on('connect', function() {
		stream.write('Welcome!');
		console.log('Welcome!');
	});
	
	stream.on('data', function(data) {
		stream.write(data);
		console.log(data);
	});
});