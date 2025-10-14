// 1.arrange all negative number at starting and positive at last

let array = [1, -2, 3, -4, 5, -6, 7, -8, 9, 10,11,1,-19,-9,-4];
let negativeNum = []
let pogitiveNum = []
for (let i = 0; i < array.length; i++) {
        (array[i] < 0) ? negativeNum.push(array[i]) : pogitiveNum.push(array[i])
}
const result = negativeNum.concat(pogitiveNum)
console.log("result", result);

// console.log("-----------------------");

let arr = [1,-2,3,4,-5,-6,7,-8,9,10];
for(let i = 0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
        if(arr[i]>0){
            let temp  = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;

        }
    }
}
console.log(arr);
// console.log("-----------------------");
// for(let element of arr)
//     console.log(element);
