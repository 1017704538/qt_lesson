链接带来了页面的互联
一切皆资源 链接表示 URL
传统的页面加载 重新刷新 坏事 体验有点差

SPA Single Page Application 单页应用

## 路由的用法 vue-router 会用不算什么 框架的实现
    单页应用的结构
    不再是n个页面了，而是一个页面， 分为不动的部分和动的部分
    导航 nav 含a #/page1
# /page1 path 带来页面切换 抛个锚
    URL改变了的事件, 在container中动态DOM
    锚链接用于大型页面 方便跳转
    锚链接让点击链接 不跳转页面成为可能 #开头

    路由接管一切 new HashRouter(); 
    constructor 订阅hashChange事件

    新的前端世界在打开 所以要有新的秩序
    管住所有路由 #/page hashRouter
    hash => cb() 动态显示container中的内容;
    class HashRouter

    this.routers = {}
    向外提供 register 方法 (hash, callback = function() {})

    load方法加载页面
    window.addEventListener('hashchange', this.load.bind(this))
    call apply es5 手动指定函数内部this的API
    bind this 返回一个新的函数 适合事件执行时