// A JavaScript program to move all zeroes at the end of array

let arr = [1, 4, 0, 0, 2, 7, 0, 9];
let n = arr.length;

function pushZerosToEnd(arr, n) {
    let count = 0;
    for (let i = 0; i < n; i++)
        if (arr[i] != 0)
            arr[count++] = arr[i];

    while (count < n)
        arr[count++] = 0;
}


pushZerosToEnd(arr, n);
console.log("Array after pushing all zeros to end of array :<br>");
for (let i = 0; i < n; i++)
    console.log(arr[i] + " ");