- call 实现继承 如果存在方法 Child1无法继承

- Child3.prototype = Parent3.prototype 
Protype原型链赋值继承

- Child3.prototype = Object.create(Parent3.prototype)
  Child3.prototype.constructor = Child3
组合继承