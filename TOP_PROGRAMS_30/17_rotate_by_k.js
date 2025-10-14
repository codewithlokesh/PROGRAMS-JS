// 7.	Rotate an array by k positions.
// [1, 2, 3, 4, 5, 6, 7]
// [3, 4, 5, 6, 7,1,2]

const arr = [1, 2, 3, 4, 5]
const len = arr.length;
const k = 2;

for (let r = 0; r < k; r++){
    let first  = arr[0]
    for(let i = 0; i<arr.length-1; i++){
        arr[i] = arr[i+1]
    }
    arr[len-1] = first
}

console.log(arr)
