let arr = [1, 2, 2, 2, 3, 3, 3, 4, 4, 5, 2];

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            for (let k = j + 1; k < arr.length; k++) {
                arr[k - 1] = arr[k]
            }
            arr.length--;
            j--;
            // console.log(arr);

        }
    }
}
console.log(arr);