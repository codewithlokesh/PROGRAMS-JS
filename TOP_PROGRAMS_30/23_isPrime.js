//check if given number is prime or not.
function isPrime(num) {
  if (num <= 1) return false; // negatives, 0, 1 are not prime
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false; // found a divisor
  }
  return true; // no divisors found
}

console.log(isPrime(13)); // true





//separate prime numbers from given array.
let arr = [11, 4, 7, 6, 13, 17, 19, 21, 53,1]
let primeNum = []

for (let i = 0; i < arr.length; i++) {
  let prime = true
  for (let j = 2; j < arr[i]; j++) {
    if (arr[i] % j === 0) {
      prime = false
      break
    }

  }
  if(prime && arr[i] > 1){primeNum.push(arr[i])}
}
console.log(primeNum)



//🔹 Optimized Version----------------------------
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i * i <= num; i++) { // i <= sqrt(num)
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(14)); // false
console.log(isPrime(17)); // true


