// class Person {
//     constructor () {
//         this.state = {
//             count: 0
//         }
//     }
// }

// 静态方法 无法被继承
class Person {
  static sayHello () {
        return 'hello'
    }
}

console.log(Person.sayHello());

// ES5
function Person () {
    Person.sayHello = function() {
        return 'hello'
    }
}

// 静态属性
class Person {}
Person.name = 'Yuki'

class Person {
    static name = 'Yuki'
}

// ES5
function Person() {
    Person.name = 'Yuki'
}

// 实例属性