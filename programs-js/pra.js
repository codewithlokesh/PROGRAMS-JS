// // program to check an Armstrong number of three digits

// let number = 153;
// let sum = 0;

// let temp = number;
// while (temp > 0) {
//     let remainder = temp % 10;
//     sum += remainder * remainder * remainder;
//     temp = parseInt(temp / 10);
// }
// if (sum == number) {
//     console.log(`${number} is an Armstrong number`);
// } else {
//     console.log(`${number} is not an Armstrong number.`);
// }

let number = 1634;
let num = number;
let sum = 0;
let numOfDigits = 0;
let temp = num;

while (temp !== 0) {
    temp = parseInt(temp / 10);
    numOfDigits++;
}

temp = num;
while (temp != 0) {
    let reminder = temp % 10;
    let powerDigit = 1;
    for (let i = 0; i < numOfDigits; i++) {
        powerDigit *= reminder;
    }
    sum += powerDigit;
    temp = parseInt(temp / 10);
}
if (sum == number)
    console.log(`armstrong ${num}`);
else
    console.log(`not an armstrong : ${num}`);