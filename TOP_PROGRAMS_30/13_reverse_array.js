// 3.	Reverse an array without using built-in methods.

const arr = [11,2,3,4,7,18,6,17,5,3]

for(let i = 0, j=arr.length-1; i<j; i++, j--){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

console.log(arr)