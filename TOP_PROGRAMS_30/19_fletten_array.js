// 9.	Flatten a nested array.

// function fletten(arr) {
//     let result = []

//     for (let item of arr) {
//         if (Array.isArray(item)) {
//             result = result.concat(fletten(item))
//         }else{
//             result.push(item)
//         }
//     }
//     return result
// }

// const arr = [1, [2, [3, 4], 5], 6];

// console.log(fletten(arr))
//-----------------------------------
function flatten(arr){
    let result = []
    for(let i = 0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
            let flat = flatten(arr[i])
            for(let j =0; j<flat.length; j++){
                result.push(flat[j])
            }
        }else{
            result.push(arr[i])
        }
    }
    return result
}

const arr = [1, [2, [3,[2,2,[9,[8,[2,[78],3]],9],3], 4], 5], 6];
console.log(flatten(arr))