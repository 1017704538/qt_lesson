function Person(name) {
    // constructor
    this.name = name;
}
Person.prototype = {
    getName:function() {
        return this.name
    }
}
let person = new Person('Yuki');
console.log(person.name);