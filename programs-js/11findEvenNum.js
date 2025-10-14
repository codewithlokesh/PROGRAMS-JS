//  Find the EVEN numbers in an array
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const even = arr.filter(number => number % 2 === 0)

const odd = arr.filter(num =>num % 2 === 1)

console.log("even =>" + even);
console.log("odd =>" + odd);