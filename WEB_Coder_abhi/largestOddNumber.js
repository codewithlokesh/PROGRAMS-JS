//Largest Odd Number in list

//Input : num =4206
//Output : ""
//Input : num =52
//Output : "5"
const largestOddNum = function (num) {
    for (let i = num.length - 1; i >= 0; i--) {
        if ((num[i]) % 2 === 1) return num.slice(0, i + 1)
    }
    return ""
}

console.log(largestOddNum("4501"))
console.log(largestOddNum("4502"))
console.log(largestOddNum("52"))


