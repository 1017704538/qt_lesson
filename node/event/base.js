const Event = require('events');
const ev = new Event();
// 订阅
ev.on('price',function() {
    console.log('大米涨价了');
})
// 发布
ev.emit('price','大蒜');

ev.once('eat')