- 如果我们有好多信息要从用户收集 表单不要太长 
    如何让表单更容易使用
    移动 分页
    PC端 多个表单 document.form[]
- JS在面向对象中 this 指向谁?
    EditInPlace 类
    let editor = new EditInPlace();
    this 指向的是 editor
     this.staticElement = 
      document.createElement('span');

    this.staticElement.addEventListener('click',function(){
        this => 对象
        this => this.staticElement
        作为事件执行 内部的this 指向事件发生的元素
    })
    函数内部的this是执行时动态决定，执行的方式来决定的
    this.covertToText 作为对象的方法被调用

    类的封装 constructor + prototype(原型对象)
    function EditInPlace(){}
    EditInPlace.prototype = {
        this.convertToText()
        ...
    }
    每个状态一个方法 
    原生JS