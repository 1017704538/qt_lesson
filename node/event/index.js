const Event = require('events');
const request = require('request');
const ev = new Event();
function main() {
  const argv = process.argv.slice(2);
  const keywods = argv[0];
  // 搜索 选择 播放
  ev.emit('search', keywods);
}
main();

ev.on('search', function(keywords) {
  // 请求 搜索结果 下一步 选择
  keywords = encodeURIComponent(keywords);
  // wd=原生%20js
  request({
    url: `http://neteasecloudmusicapi.zhaoboy.com/search?keywords=${keywords}`,
    json: true
  }, (err, res, body) => {
    console.log('请求信息', err);
    console.log(body);
  })
})

ev.on('choose', function(songs, keywods) {
    // 命令行交互
    inquirer.prompt([{
      type: 'list',
      name: 'song',
      message: `共${songs.length}首，回车选择`,
      choices: songs.map((s, i) => {
        return `${i}:${s.name}`
      })
    }])
  })  
