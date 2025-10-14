let arr = [-11, 2, 53, -4, -5, 16, 21];
let max = arr[0];
let min = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max)
        max = arr[i]
    else if (arr[i] < min)
        min = arr[i]
}
console.log(` The max = ${max}`);
console.log(`Th min = ${min}`);