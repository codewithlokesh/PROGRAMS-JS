// 2.	Find the second largest element in an array.

// [3, 7, 2, 9, 5]   → 7  
// [10, 10, 5]       → 5  
// [-3, -7, -1, -9]  → -3  
// [5]               → undefined (or handle separately)  
// [1,1,1,1]         → undefined (no second distinct element)  


// let arr = [11,2,3,4,7,18,6,17,5,3] // ---------------------------------------
// let max = -Infinity
// let secondMax = -Infinity

// for(let num of arr){
//     if(num > max){
//         secondMax = max
//         max= num
//     }
//     else if(num < max && num > secondMax){
//         secondMax = num
//     }
// }

// console.log(max)
// console.log(secondMax)

let arr = [11,2,3,4,7,18,6,17,5,3]
let max = -Infinity;
let secondMax = -Infinity;

for(let num of arr){
    if(num > max ) max = num
}

for(let num of arr){
    if(num > secondMax && num < max) secondMax = num
}

console.log(max)
console.log(secondMax)