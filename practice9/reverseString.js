let str = "vicky lokesh";
let arr = str.split("");
console.log(arr);


for(let i = 0, j=arr.length-1; i<j; i++,j--){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
let joinedStr = arr.join("");

console.log(joinedStr)