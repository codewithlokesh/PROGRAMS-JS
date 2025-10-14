// find the given number is armstrong or not ?

let num = 1634;

let temp = num;
let count = 0;
let sum = 0;

while(temp!=0){
    temp = parseInt(temp/10)
    count++;
}
temp = num
while(temp!=0){
    let reminder = parseInt(temp%10);

    let powerDigit = 1;
    for(let i = 0; i<count; i++)
        powerDigit *= reminder;

    sum += powerDigit;
    
    temp = parseInt(temp/10);
}


console.log(sum === num ? "armstrong :" + num : "not armstrong :" + num);


function isArmstrong(number) {
  const digits = number.toString().split('')
  const power = digits.length

  const sum = digits.reduce((acc, digits) => acc + Math.pow(parseInt(digits), power), 0)
  if (sum === number)
    console.log("Arm")
  else
    console.log("not arm")
}

isArmstrong(1634)


