// 6.	Find the intersection of two arrays.
// 👉 Intersection means: common elements between two arrays.

// Approach 2
// const arr1 = [1, 2, 3, 4, 5]
// const arr2 = [3, 4, 5, 6, 7]
// const intersection = []

// for(let i =0; i<arr1.length; i++){
//     if(arr2.includes(arr1[i])){
//         intersection.push(arr1[i])
//     }
// }

// console.log(intersection)


// Approach 1 -------------------------------
let arr1 = [1, 2, 3, 4, 5]
let arr2 = [3, 4, 5, 6, 7]
let intersection = []

for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
            intersection.push(arr1[i]);
            break;
        }
    }
}

console.log(intersection)

