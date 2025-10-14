let arr = [1,2,3,4];
let len =0;
for(let i in arr){
    len++;
}
console.log(len);
console.log("-----------another method--------");

while(arr[len]!==undefined){
    len++;
}
console.log(len);


