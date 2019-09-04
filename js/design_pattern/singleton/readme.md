-  单例模式 设计模式的最基本模式 不管new多少次 永远只返回一个对象
- instance 立即执行函数 + 闭包 
- 为什么不设置instance为全局? 
    var instance = null 污染命名空间
    利用闭包
    var Singleton = (function() {
    // 闭包
    let instance = null
    return function() {
        // constructor
        if (instance) {
            return instance;
        }
        return instance = this
    }
})();
- 立即执行函数 返回函数 是构成闭包的常用手段 生产环境 立即执行函数 
  创造闭包环境 变量一直都在 运行时可以引用生产时的闭包环境中的变量