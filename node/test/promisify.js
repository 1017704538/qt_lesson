const fs = require('fs')
const util = require('util');
const readDir = util.promisify(fs.readDir);//读取文件夹
fs.readDir('./test/', (err, files) => {
    console.log('files', files)
})

const readFile = util.promisify(fs.readFile);


readFile('./test.txt', 'utf8').then(data => {
    console.log('data-', data);
})
fs.readFile('./test.txt', 'utf8', (err, data) => {
    console.log(data);
})