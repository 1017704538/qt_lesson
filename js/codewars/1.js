// Create Phone Number
// (123)456-7890

// const createPhoneNumber = (arr) => 
// "(" + arr[0] + arr[1] + arr[2] + ")" + arr[3] + arr[4] +arr[5] + "-"
// createPhoneNumber([1,2,3,4,5,6,7,8,9,0]);
const createPhoneNumber = (numbers) => {
    let format = "(xxx)xxx-xxxx";
    // replace
    for(let i = 0;i <= numbers.lenth;i++){
        format = numbers.replace('x',numbers[i]);
    }
    return format;
}
