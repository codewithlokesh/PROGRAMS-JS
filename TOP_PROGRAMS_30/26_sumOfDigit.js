//Find the sum of digits of a number.

function digitSum(num) {
    let sum = 0;
    while (num !== 0) {
        let remainder = parseInt(num % 10);
        sum += remainder;
        num = parseInt(num / 10)
    }
    return sum
}

console.log(digitSum(1234))


//-----------------------------------------------
function digitSum2(num) {
  return num
    .toString()
    .split('')
    .reduce((acc, digit) => acc + Number(digit), 0);
}

console.log(digitSum2(1234)); // Output: 10
