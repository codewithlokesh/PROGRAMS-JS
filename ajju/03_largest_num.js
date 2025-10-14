const arr = [1, 34, 45, 17, -23, -5, 19, 5, 23]
let max = -Infinity
let min = Infinity
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
        if (max < arr[i]) max = arr[i]
    }
}
console.log(max);
console.log(min);


