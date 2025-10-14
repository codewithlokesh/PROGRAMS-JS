// let  arr = [1,2,3,4,5,6,7,8,9,10];
// even = [];
// odd = [];

// for(let i = 0 ;i<arr.length; i++){
//     if(arr[i]%2 == 0)
//         even.push(arr[i]);
//     else
//         odd.push(arr[i]);
// }
// console.log(even+ "----" + odd);

// ---------------------------------------------------------------------------
// let  arr = [1,2,3,4,5,6,7,8,9,10];

// var arr1 = [];
// var k = 0;

// for(let i=0; i<arr.length; i++){
//     if(arr[i] % 2 == 1)
//        arr1[k++] = arr[i];
//     if(arr[i]%2 == 0)
//         arr1[k++] = arr[i];

// }
// for(let i=0; i<arr.length; i++){
//     if(arr[i] % 2 == 0)
//        arr1[k++] = arr[i];
// }
// console.log(arr1)

// ------------------------------------------------------------------

// let  arr = [1,2,3,4,5,6,7,8,9,10];
// let newArr = [];
// for(let i = 0; i<arr.length; i++){
//     if(arr[i]%2 == 0)
//         newArr[newArr.length++] = arr[i];
// }
// for(let i = 0; i<arr.length; i++){
//     if(arr[i]%2 == 1)
//         newArr[newArr.length++] = arr[i];
// }
// console.log(newArr);


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] % 2 == 1) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

}
console.log(arr);