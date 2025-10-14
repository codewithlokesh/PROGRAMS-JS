//8.	Check if a string contains only digits.

// "12345"   → true   (only digits)
// "12a45"   → false  (contains a letter)
// "007"     → true   (leading zeros are fine)
// ""        → false  (empty string, usually considered not valid)


const isOnlydigit = (str)=>{
    if(str.length ===0) return false
    for(let i=0; i<str.length; i++){
        if(str[i] < '0' || str[i] > '9'){
            return false
        }
    }
    return true
}

console.log(isOnlydigit("1122"))
console.log(isOnlydigit("1122"))
console.log(isOnlydigit("1w122"))