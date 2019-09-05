- 静态资源
    静态 不会随着服务器运行改变的，资源放到服务器上面的
    常见的静态资源:html css js img
- 浏览器 打开页面 file:///D:/workspace/Git/qt_lesson/node/static_resource_server/index.html 本地文件夹打开
                http://localhost:9090/ 本地端口打开
    支持两个不同的协议
    浏览器知道这是一个html 根据不同属性请求对应src 得到结果 服务器要返回相应内容
- live-server 打开的路径和磁盘路径一一对应
    req.url === 磁盘路径

作用 : 统一处理了 静态资源的请求 

静态资源的请求都会有某些特点