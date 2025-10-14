// 10.	Find the character with the maximum frequency in a string.

// "programming" → "g" (2 times)  
// "javascript"  → "a" (2 times)  
// "aaaabbc"     → "a" (4 times)  
// ""            → nothing / handle separately  

let str = "programming"
let count = {}
let maxChar ="";
let maxCount = 0;

for (let ele of str) {
    count[ele] ? count[ele] += 1 : count[ele] = 1
}
for (let char in count) {
    if (maxCount < count[char]) {
        maxCount = count[char]
        maxChar = char
    }
}


console.log("Character with max frequency:", maxChar, "->", maxCount);