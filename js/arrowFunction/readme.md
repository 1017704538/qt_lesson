- 箭头函数不支持成名形参 普通函数可以
- arguments 是每个函数都有的局部变量
- Array.from()方法就是将一个类数组对象或者可遍历对象转换成一个真正的数组。Array.from有三个参数，
Array.from(arrayLike[, mapFn[, thisArg]])，arrayLike：想要转换成数组的伪数组对象或可迭代对象；
mapFn：如果指定了该参数，新数组中的每个元素会执行该回调函数；thisArg：可选参数，执行回调函数 mapFn 时 this 对象。
该方法的返回值是一个新的数组实例（真正的数组）。

- 箭头函数没有this 箭头函数 this 指向定义的时候所处的外部 的this
- call apply 不能改变箭头函数的 this