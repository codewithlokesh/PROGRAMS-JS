// 9.	Remove duplicate characters from a string.

// "programming" → "progamin"  
// "hello"       → "helo"  
// "aaaabbbb"    → "ab"  
// ""            → ""  

// let str = "level"
// let arr = str.split("")
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] == arr[j]) {
//             for (let k = j + 1; k < arr.length; k++) {
//                 arr[k - 1] = arr[k]
//             }
//             arr.length--;
//             j--;
//             // console.log(arr);

//         }
//     }
// }
// console.log(arr.join(""))


let str = "programming"
let result = ""
for (let i = 0; i < str.length; i++) {
    let isDuplicate = false;
    for (let j = i + 1; j < str.length; j++) {
        if (str[i] === str[j]) {
            isDuplicate = true
            break
        }
    }
    if(!isDuplicate){
        result += str[i]
    }
}
console.log(result)