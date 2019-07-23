// Math.max()
const IMath = {}//namespace
/*
* @params:number NaN Not a number
* @return:number 返回最大值
*/
IMath.max = function(...args){
    // console.log(arguments,arguments.length);
    for(var i = 0;i < args.length;i++){
        // 类型检测
        // console.log(arguments[i]);
        if(typeof args[i] !== 'number'){
            return NaN;
        }
    }
}
// IMath.max(2,4,3,9);
console.log(IMath.max(...[2,3,4,9]));