// write a program to check [-3, 1.2, 7,5, 4,2] check if some of any
//  two pair ===0, then return true or return else in js using 2 for loops.

function hasZeroPair(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return true; // found a pair
      }
    }
  }
  return false; // no pair found
}

console.log(hasZeroPair([-3, 1.2, 7, 5, 4, 2])); // false
console.log(hasZeroPair([-3, 3, 5, 1]));         // true (-3 + 3 = 0)
console.log(hasZeroPair([2, -2, 4, 6]));         // true (2 + -2 = 0)
