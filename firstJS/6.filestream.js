var fs = require('fs');

fs.watchFile('js/3.txt', function(curr, prev) {
	console.log('the current mtime is:' + curr.mtime.getTime());
	console.log('the previous mtime is:' + prev.mtime.getTime());
});