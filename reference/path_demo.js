const path = require('node:path');

// get Base file name
console.log(path.basename(__filename));

// get Directory name
console.log(path.dirname(__filename));

// get File Extension
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename).base);

// Concatenate paths
// ../test/hello.html
console.log(path.join(__dirname, 'test', 'hello.html'));