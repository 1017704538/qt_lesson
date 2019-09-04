function doSomething() {
    if(status === 'a'){

    }else if (status === 'b') {
        
    }else{

    }
}

var map = {
    a:() => {console.log('a')},
    b:() => {console.log('b')},
    default:() => {}
}

let key1 = 12;
let value1 = 'test';
let m_1 = new Map();
let m_2 = new Map([[key1, value1]]);