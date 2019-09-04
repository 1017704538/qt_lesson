// call 实现继承 如果存在方法 Child1无法继承
function Parent1() {
    this.name = 'parent1',
    function() {}//无法被继承
}
function Child1() {
    Parent1.call(this)//继承Parent中的name属性
    this.type = 'child1'
}

console.log(new Child);//实例继承构造函数的属性