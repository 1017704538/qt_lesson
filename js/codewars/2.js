// 140 likes 
// [] no one like this ["Peter"] Peter like this

const likes = names => {
    const templates = [
        'no one like this',
        '{name} like this',
        '{name} and {name} like this',
        '{name},{name} and {name} like this',
        '{name},{name} and {n} others like this'
    ];
    let idx = Math.min(names.length,4);
    return templates[idx].replace(/{name}|{n}/g,function(val){
        // console.log(val)
        return val === '{name}' ? names.shift() : names.length;
    });
    // switch(names.length){
    //     case 0 :
    //         return "no one like this"
    //     case 1 :
    //         return names[0] + "likes this"
    //     case 2 :
    //         return names[0] + "and" + names[1] +'like this'
    // }
    // 数学思维
}
console.log(likes(['甲','乙','丙','丁','戊']));