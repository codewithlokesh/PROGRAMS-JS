// Write a function to find a logest common prefix string amoung an array of strings.
// Input: str = ["flower", "flow", "flight"]
// Output: "fl"

let longestCommonPrefix = function (str) {
    str.sort()
    let start = str[0]
    let end = str[str.length - 1]
    let result = ""

    for (let i = 0; i < start.length; i++) {
        if (start[i] === end[i]) result = result + start[i];
        else break;
    }
    return result
}

const str = ["flower", "flow", "flight"]
console.log(longestCommonPrefix(str))