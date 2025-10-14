// 6.	Find the longest word in a string.

let str = "The longest word in this string"
let arr = str.split(' ')
let logest = arr[0]

for(let i =0; i<arr.length; i++){
    if(arr[i].length > logest.length){
        logest = arr[i]
    }
}

console.log("Longest word: ", logest)

console.log(str.split(" ").reduce((a,b)=>a.length >= b.length ? a: b))
