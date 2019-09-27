let obj = {
    a:'1',
    b:'2',
    c:'3',
    [Symbol('d')]:'4'//不可被枚举
}
Object.defineProperties(obj, 'e', {
    value: '5',
    enumerable:true
})
console.log(Object.keys(obj));

for (let key in obj) {
    console.log(key)
}