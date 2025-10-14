const str = "rechargeable"
let arr = str.split("")

const count = {}
let element = []

for(let i = 0; i<arr.length; i++){
    element = arr[i]
    count[element] ? count[element] += 1 : count[element] = 1
}
console.log(count);

