// 10.	Check if an array is sorted.

function isSorted(arr) {
  let ascending = true, descending = true;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) ascending = false;
    if (arr[i] < arr[i + 1]) descending = false;
  }

  return ascending || descending;
}

console.log(isSorted([1, 2, 3, 4, 5])); // true (ascending)
console.log(isSorted([5, 4, 3, 2, 1])); // true (descending)
console.log(isSorted([1, 3, 2, 4, 5])); // false
