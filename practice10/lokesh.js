const arr = [
    [1, 1, 1, 1],
    [2, 2, 2, 2],
    [3, 3, 3, -3],
    [3, 3, 3, 1]
]
const sumOfArr = [];


for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr[i].length; j++) {
        sum += arr[i][j];
    }
    sumOfArr.push(sum);
}

const max = sumOfArr[0]
const min = sumOfArr[0]
const secondMax = sumOfArr[0]
const secondMin = sumOfArr[0]

console.log(sumOfArr)