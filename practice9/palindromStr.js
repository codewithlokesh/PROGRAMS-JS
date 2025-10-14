let str= "vikiv";
let newStr = str.split("");
console.log(newStr.length-1);

console.log(newStr);
for(let i=0,j=newStr.length-1; i<j; i++, j--){
    let temp =newStr[i];
    newStr[i] = newStr[j];
    newStr[j] = temp;
}
let temp = newStr.join("");

console.log(str==temp ? "palindrom :" + str : "not palindrom :"+str);