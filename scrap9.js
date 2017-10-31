// apendfile.js
var fs = require('fs');

fs.appendFile('/tmp/fs.tmp', 'appended', function(err) {
  if (err) throw err;
});