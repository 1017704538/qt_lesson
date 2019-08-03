const https = require('https');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
// GET POST
// http.createServer(())
https.get('https://www.smzdm.com/youhui/', function(res) {
  res.setEncoding('utf-8');
  let html = '';
  res.on('data', function(chunk) {
    html += chunk;
  })
  res.on('end', function(chunk) {
    const $ = cheerio.load(html, {
      decodeEntities: false
    })
    // 只有一个参数 整个 document
    let lists = [];
    $('.list.list_preferential').each(
      function() {
        const _this = this;
        // document.queryselector('.itemName a');
        // $('.list').queryselector('.itemName a');
        let title = $('.itemName a', _this).text();
        const price = $('.red', _this).text();
        const img = $('.picLeft img', _this)
        .attr('src');
        lists.push({
          title: title,
          price,
          img
        })
        saveImage('./img/', img);
      })
    saveList('./data/lists.json', lists);
  });
})
function saveImage(imgDir, imgUrl) {
  https.get(imgUrl, (res) => {
    res.setEncoding('binary');
    var data = '';
    res.on('data', (chunk) => {
      data += chunk;
    })
    res.on('end', function() {
      // www.smzdm.com/a.png;
      const imgName = path.basename(imgUrl);
      fs.writeFile(imgDir + imgName, data,
        'binary', (err) => {
          if (!err) {
            console.log('img saved');
          }
        })
    })
  })
}
function saveList(path, list) {
  fs.writeFile(path,
    JSON.stringify(list),
    (err) => {
      console.log(err);
      if (!err) {
        console.log('lists saved');
      }
    }
    )
}
