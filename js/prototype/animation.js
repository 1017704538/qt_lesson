function Animal(planet) {
    this.planet = planet;
}
//constructor 函数原型
Animal.prototype.getPlanet = function() {
    return this.planet;
}

function Persin(name) {
    this.name = name;
}

Person.prototype = new Animal('earth');

Person.prototype.getName = function() {
    return this.name;
}

const person = new Person("Yuki");
console.log(person.getName);
console.log(person.getPlanet)