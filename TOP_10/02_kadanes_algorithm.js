// maximum sum of a contiguous subarray (a classic problem known as Kadane’s Algorithm).
// Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6  // for subarray [4, -1, 2, 1]


//-----------------------------best one ------------------------
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const maxsum = (arr) => {
    let sum = 0;
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        if (sum > max) max = sum
        if (sum < 0) sum = 0
    }
    return max
}

console.log(maxsum(arr))

//-----------------best one----------------------------
function maxSubarry2(arr) {
    let max = arr[0]

    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum = sum + arr[j]
            if (sum > max) max = sum
        }
    }
    return max
}
console.log(maxSubarry2(arr))
