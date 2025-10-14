// 7.	Capitalize the first letter of each word in a string.

let str = "Capitalize the first letter of each word in a string"
let word = str.split(" ")

for (let i = 0; i < word.length; i++) {
    word[i] = word[i][0].toUpperCase() + word[i].slice(1)
}
let result = word.join(" ")
console.log(result)



// second approach
let str11 = "capitalize the first letter of each word";
let result1 = str1
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");
console.log(result);
