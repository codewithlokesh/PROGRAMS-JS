function findDuplicates(arr){
    const duplicates = []
    for(let i = 0; i<arr.length; i++){
        for(let j = i+1; j<arr.length; j++){
            if(arr[i] === arr[j] && !duplicates.includes(arr[i]))
                duplicates.push(arr[i])
        }
    }
    return duplicates
}

// function findDuplicates2(arr) {
//     arr.sort((a, b) => a - b);    
//     const duplicates = [];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] === arr[i - 1] && !duplicates.includes(arr[i])) {
//             duplicates.push(arr[i]);
//         }
//     }
//     return duplicates;
// }

const numbers = [1,2,5,3,2,4,5,0,8,8,6,7,54,67,45,67];
console.log(findDuplicates(numbers));

