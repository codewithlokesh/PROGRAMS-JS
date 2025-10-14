let arr = [1, 2, 5, 3, 6, 7, 8, 11, 9, 10]
let num = [];
let length = 0;

for (let i = 0; i < arr.length - 1; i++) {
    let newarr = [];
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[j - 1] > arr[j])
            break;
        else
            newarr.push(arr[j]);
    }
    if (arr.length < newarr.length) {
        newarr.unshift(arr[i]);
        num = newarr;
        length = newarr.length;

    }
}
console.log(num);
console.log(length)