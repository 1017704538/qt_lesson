VUE REACT SPA Single Page Application 应用体验更好,传统页面由链接组成
一个链接加载一个新的页面 新的http请求
/about req res 过程
req /about
网路传输时间 电频信号
node java Python 后端代码 查数据库执行的时间
返回html
超过1.5s 用户就会离开
res /about.html

路由是独立的
网站MVC => 应用(Vue App) 解决白屏问题
    应用的体验产生了路由
Vue router 
    hashRouter
    #/shop
- 优点 IE8以上都支持
- 缺点 路由不纯粹 /shop

HistoryRouter 访问历史 记录
VueRouter 两种实现方式
HashRouter(兼容性)
HistoryRouter(长得好,移动端兼容性还是没有问题)