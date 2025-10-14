// write a program to remove duplicate an array in js

const arr = [1, 2, 3, 3, 4, 5, 6, 7, 3, 4, 5, 19, 19, 2, 11, 10]
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            for (let k = j + 1; k < arr.length; k++) {
                arr[k - 1] = arr[k]
            }
            arr.length--;
            j--
        }

    }
}
console.log(arr);
console.log("--------------------------------");

const removeDuplicates = (arr) => {
    const unique = []
    for(let i = 0; i < arr.length; i++){
        if(!unique.includes(arr[i]))
            unique.push(arr[i])
    }
    return unique
}
const newArr = [1, 2, 3, 3, 4, 5, 6, 7, 3, 4, 5, 19, 19, 2, 11, 10]
console.log(removeDuplicates(newArr));


