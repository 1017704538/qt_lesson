function Parent3() {
    this.name = 'parent3'
    this.play = [1,2,3]
}

function Child3() {
    Parent3.call(this)
    this.type = 'child3'
}
// Child3.prototype = new Parent3()
// Child3.prototype = Parent3.prototype
Child3.prototype = Object.create(Parent3.prototype)
Child3.prototype.constructor = Child3
console.log(new Child3)

var s1 = new Child3()
var s2 = new Child3()
s1.play.push(4)
console.log(s1.play)
console.log(s2.play)