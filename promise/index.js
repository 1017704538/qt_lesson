// console.log(1)
// console.log(2)
// console.log(3)

// function time() {
//     setTimeout(() => {
//         return 2
//     }, 1000);
// }

function xq () {
    return new Promise((reslove,reject)=>{
        setTimeout(() => {
            console.log('相亲')
            reslove('顺利')
        }, 1000);
    }).then(()=>{
        console.log('顺利')
    })

}
function marry() {
    return new Promise((reslove,reject) => {
        setTimeout(() => {
            console.log('结婚')
        }, 500);
    } ).then(()=>{
        
    })

}
function sw() {
    console.log('生娃')
}
xq().then(marry())
