// 4.	Remove duplicates from an array.

// Input:  [1, 2, 2, 3, 4, 4, 5]  
// Output: [1, 2, 3, 4, 5]

const arr = [1, 2, 2, 3, 4, 4, 5, 2, 2, 2, 2, 2, 4, 4, 4, 4, 3, 2, 4, 5, 5, 6, 7]

let newArr = []

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            for (let k = j + 1; k < arr.length; k++) {
                arr[k - 1] = arr[k]
            }
            arr.length--
            j--
        }

    }
}
console.log(arr)

// ----------------------------

const arr1 = [1, 4, 4, 4, 3, 2, 4, 5, 5, 6, 7,1]
const seen = {}
const uniqueArr = []

for(let i = 0; i<arr1.length; i++){
    if(!seen[arr1[i]]){
        seen[arr1[i]]= true;
        uniqueArr.push(arr1[i])
    }
}
console.log(uniqueArr)

//-------------------------------------------------
const arr2 = [1, 2, 2, 3, 4, 4, 5, 2, 2, 2, 2, 2, 4, 4, 4, 4, 3, 2, 4, 5, 5, 6, 7];
let result = [];

for (let i = 0; i < arr2.length; i++) {
    let found = false;
    for (let j = 0; j < result.length; j++) {
        if (arr2[i] === result[j]) {
            found = true;
            break;
        }
    }
    if (!found) {
        result.push(arr2[i]);
    }
}

console.log(result);
