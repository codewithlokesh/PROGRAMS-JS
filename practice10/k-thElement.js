// Find the kth largest and kth smallest element in array.

let arr = [1, 12, 3, 7, 0, 4, 90, 14, 50];
arr.sort((a, b) => a - b);
// arr.reverse();

arr.sort
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log(arr)