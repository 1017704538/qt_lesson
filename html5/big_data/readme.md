- 网页上显示大量的HTML也是负担
    http 请求 端口 伺服状态
    访问 / index.html 传输给浏览器Client
    127.0.0.1   localhost 本地开发
    192.168.43.1    局域网  远程
    浏览器 访问代理Client
    远程服务器 (IP,domain)  伺服状态
    浏览器访问代理Cilent    ip 8080 下载下来(超过1.5s 再见)
    
- 分页  ?limit = 20&page = 1
    html5 来实现

    http 是超文本传输协议
    文件太大 分几次 等时间长 对大数据分页
    http 状态码 304 文件没有修改，使用浏览器缓存
- 得益于 es6 Array.from({length:n},(v,k)=>({
    content:`新闻${k}`
}))
    前端模拟大数据 
- 按页分割
    分割好 Array.from(
            {length:Math.ceil(arr.length/size)},
            (v,i) => arr.slice(size*i,i*size + size)
        )
