var fs = require('fs');
fs.readFile('js/3.txt', function(err, data) {
	if(err) {
		throw err;
	}
	console.log('3.txt\r\n', data);
});

console.log('Reading 3.txt');