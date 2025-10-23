//Given an array of size N and an integer K, find the maximum 
// element in every contiguous subarray of size K.

// Input:  arr = [1, 3, -1, -3, 5, 3, 6, 7]
// K = 3
// Output: [3, 3, 5, 5, 6, 7]

const maxOfEach = (arr)=>{
    let result = []
    let k = 3;
    for(let i = 0; i<=arr.length-3; i++){
        let max = arr[i]
        for(let j = i; j<i + k ; j++){
            if(arr[j] > max) max  = arr[j]
        }
        result.push(max)
    }
    return result
}
const arr = [1,3,-1,-3,5,3,6,7]
console.log(maxOfEach(arr))