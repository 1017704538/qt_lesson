const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();
const inFile = fs.createReadStream('./sample.txt');
const outFile = fs.createWriteStream('./sample.txt');
inFile.pipe(gzip).pipe(outFile);