//Check if a number is Armstrong or not.
let num = 8208;
let temp = num;
let count = 0;
let sum = 0;

while (temp !== 0) {
    count++;
    temp = parseInt(temp / 10)
}
temp  = num;
console.log('the value of count :', count)
while(temp!==0){
    let remainder = parseInt(temp%10);
    let powerDigit = 1;             //let powerDigit = reminder ** count;
    for(let i=0; i<count; i++){
      powerDigit = powerDigit * remainder;
    }
    sum = sum + powerDigit;
    temp = parseInt(temp / 10)
}

console.log(num === sum ? `armstrong num ${num}` : `not armstrong   ${num}`)
//----------------------------------------------------------------

function isArmstrong(num) {
  const numStr = num.toString();
  const order = numStr.length;
  let sum = 0;
 
  for (let i = 0; i < order; i++) {
    const digit = parseInt(numStr[i]); // Convert char digit back to a number
    sum += Math.pow(digit, order); // Add digit raised to the power of 'order'
  }
  return sum === num
}
console.log(isArmstrong(153)); 


//------------------------------------------------------------------------------
function isArmstrong(num) {
  const digits = num.toString().split('');
  const count = digits.length;
  const sum = digits.reduce((acc, d) => acc + Math.pow(+d, count), 0);
  return sum === num;
}

console.log(isArmstrong(153)); // true