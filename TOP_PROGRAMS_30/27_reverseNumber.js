//Reverse a number.
function reverseNum(num) {
    let reverse = 0;
    while (num !== 0) {
        let remainder = num % 10;
        reverse = reverse * 10 + remainder;
        num = parseInt(num / 10)
    }
    return  reverse
}
console.log(reverseNum(12345))

//----------------------

function reverseNum2(num){
    return Number(num.toString().split('').reverse().join(''))
}