var cmd = 'echo hello; sleep 1; echo world;',
	spawn = require('child_process').spawn,
	child = spawn('sh', ['-c', cmd]);
	
child.stdout.on('data', function(chunk) {
	//chunk is a Buffer
	console.log(chunk.toString());
});