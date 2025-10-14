// // Write a java program to search an element in given array


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let found = false;
let target = 15;
let index;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
        found = true;
        index = i + 1;
        break;
    }
}

if (found)
    console.log("element " + target + " at index " + index);
else
    console.log("element " + target + " isn't found");