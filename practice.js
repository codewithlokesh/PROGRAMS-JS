function findMissingNumberBySorting(arr) {
  arr.sort((a, b) => a - b); // Sort in ascending order

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      return i + 1; // The missing number is found
    }
  }
  // If no number is missing within the current range, 
  // the missing number is the next in sequence
  return arr.length + 1; 
}

const numbers = [1, 2, 3,4, 5, 6];
const missing = findMissingNumberBySorting(numbers);
console.log(`The missing number is: ${missing}`); // Output: The missing number is: 4