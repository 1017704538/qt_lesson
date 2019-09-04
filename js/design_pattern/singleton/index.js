// function Singleton() {
//     // let instance = null;
//     // return instance;
// }
const Singleton = (function() {
    // 闭包
    let instance = null
    console.log('------');
    return function() {
        // constructor
        if (instance) {
            return instance;
        }
        return instance = this
    }
})();
console.log(Singleton,typeof Singleton)
const a = new Singleton();
const b = new Singleton();
console.log(a == b)