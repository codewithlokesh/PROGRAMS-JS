// Write a function to reverse string words.


// --------------------------solution-1----------------------------------
// const reverseEachWord = (str)=>{
//     return  str
//     .split(" ")
//     .map((words)=> words.split("").reverse().join(""))
//     .join(" ")
    
// }
// const str1 = "welcome to the new world"
// console.log(str1)
// console.log(reverseEachWord(str1))

// // ------------------solution-2---------------------------

function reverseString(str) {
    let words = str.split(" ")
    let arr = []

    for (let i = words.length - 1; i >= 0; i--) {
        if (words[i].length > 0) {
            arr.push(words[i])
        }
    }
    console.log(arr.join(" "))
}
const str1 = "This is new word"
reverseString(str1)


// // ------------------solution-3--------------------------

let str = "welcome world join"
let arr = str.split(" ");
let newArr = []
let word = "";
for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr[i].length; j++) {
        word = arr[i][j] + word;
    }
    newArr.push(word)
    word = ""
}
console.log(arr)
console.log(newArr)



