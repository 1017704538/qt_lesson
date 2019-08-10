- canvas
- JS异步是核心问题
    事件 定时器 fetch/ajax
    代码的编写顺序和执行顺序不一样 代码的可读性下降
    loadAssets(); 等待一秒
    JS先 hideWelcom() loadAsset()执行完成
- JS 单线程语言
    在一次执行之中会把立即执行的代码执行 将事件监听/定时器/Ajax 事件轮循之中
- img.onload window.onload 开始我们的表演 太慢了
    如果html css js 都没有搭建完成 游戏脚本会有问题 

- 函数式编程
    写代码? 完成开发需求 复杂 => 独立的多个子需求来完成 => 单独封装成一个函数
    init()
    drawSnake()
    addEvent()
    refreshSnake()
    winOrLose();
    showResulst();
