// 3.	Find the first non-repeating character in a string.

function firstNonRepeatingChar(str) {
    let count = {}

    for(let char of str){
        count[char] ? count[char] += 1 : count[char] = 1
    }
    for(let char of str){
      if(count[char] ===1) return char
    }
    return null
}

console.log(firstNonRepeatingChar("swiss"))
console.log(firstNonRepeatingChar("lokesh"))

//Approach 2-------------------------
function firstNonRepeatingChar2(str) {
    for (let i = 0; i < str.length; i++) {
        let count = 0;
        for (let j = 0; j < str.length; j++) {
            if (str[i] === str[j]) count++;
        }
        if (count === 1) return str[i];
    }
    return null; // no non-repeating char
}

console.log(firstNonRepeatingChar2("swiss")); // Output: "w"
