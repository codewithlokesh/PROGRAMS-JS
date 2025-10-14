let str = "lokesh"
let arr = str.split("")

for (let i = 0, j = arr.length; i < j; i++, j--) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
let result = arr.join("")
console.log(result);
