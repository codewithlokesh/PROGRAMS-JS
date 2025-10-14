// console.log("practice");
var arr = [1, 2, 3, 4, 5];

function arrayLength(s) {
    let length = 0;
    while (arr[length] !== undefined)
        length++;
    return length;
}

console.log(arrayLength(arr));