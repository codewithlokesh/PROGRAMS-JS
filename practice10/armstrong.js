let num = 1634;
let temp = num;
let sum = 0;
let count = 0;
while (temp != 0) {
    temp = parseInt(temp / 10);
    count++;
}
temp = num;

while (temp != 0) {
    let rem = parseInt(temp % 10);

    let powerDigit = 1;
    for (let i = 0; i < count; i++) {
        powerDigit *= rem;
    }
    sum += powerDigit;
    temp = parseInt(temp / 10)
}
console.log(sum)
console.log(num)
console.log(sum == num ? "armstrong :" + num : "not armstrong :" + num);



// function checkArmstrong(num) {
//   const digits = num.toString().split('')
//   const order = digits.length
  
//   const sum = digits.reduce((acc, digits)=> acc + Math.pow(parseInt(digits), order), 0)
//   if(sum === num){
//     console.log("Armstrong")
//   }else{
//     console.log("nor arm")
//   }
//   console.log(sum)
// }
// checkArmstrong(153)
