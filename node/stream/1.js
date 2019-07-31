const fs = require('fs');
//require 模块引入
fs.createReadStream('./sample.txt').pipe(process.stdout);//输出设备的一种
//pipe 构建管道