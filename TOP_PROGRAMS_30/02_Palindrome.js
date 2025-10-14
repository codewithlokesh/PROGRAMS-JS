
const isPalindrome1 = (str) => {
    let reverseStr = str.split("").reverse().join("")
    return reverseStr === str
}

// console.log(isPalindrome1("level"))


const isPalindrome2 = (str) => {
    let reverseStr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i]
    }
    return str === reverseStr
}

// console.log(isPalindrome2("121"))

const isPalindromeNumber = (num) => {
    let reversed = 0;
    let original = num
    while (num > 0) {
        let rem = num % 10
        reversed = reversed * 10 + rem
        num = Math.floor(num / 10)
    }

    if(original === reversed) return true
    return false
}

console.log(isPalindromeNumber(12321))