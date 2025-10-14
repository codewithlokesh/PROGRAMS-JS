let str = "lokesh"
console.log(str.length)
let newStr = ""
for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i]
}
console.log(newStr)