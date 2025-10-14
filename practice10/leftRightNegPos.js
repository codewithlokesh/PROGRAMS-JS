// let arr = [1, -2, 3, -4, 5, -6, 7, -8, 9, 10];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] < 0) {
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;

//         }
//     }
// }
// console.log(arr)
// ----------------------------------------------------------------

let arr1 = [-1, 2, -3, -4, 5, 6, -7, 8, 9, -10];
let negNum = [];
let posNum = [];

for (let i = 0; i < arr1.length; i++) {
    arr[i] < 0 ? negNum.push(arr[i]) : posNum.push(arr[i]);
}
let newArr = negNum.concat(posNum);
console.log(newArr);