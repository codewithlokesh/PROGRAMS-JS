// 5.	Find the missing number in an array of 1…n.
// [1, 2, 4, 5], Here, the missing number is 3.

function findMissNum(arr){
    let n = arr.length + 1
    let expectedSum = (n * (n+1))/2
    let actualSum = 0;
    for(let i = 0; i<arr.length; i++){
        actualSum += arr[i]
    }
    return expectedSum - actualSum
}

const arr2 = [1,2,3,4,6,7,8,9]
console.log(findMissNum(arr2))

//--------------------------------------
function missingNum(arr) {
    let n = arr.length +1;
    for(let i = 1; i<n ; i++){
        let found = false;
        for(let j = 0; j<n-1; j++){
            if(arr[j] === i){
                found = true;
                break;
            }
        }
        if(!found){
            return i
        }
    }
    return -1
}
const arr3 = [5, 2, 4, 8, 3, 7, 1];
console.log(missingNum(arr3));


//-------------------------------------------
function findMissingNumberBySorting(arr) {
  arr.sort((a, b) => a - b); 

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      return i + 1; 
    }
  }
  return arr.length + 1; 
}

const numbers = [1, 2, 3, 5, 6];
const missing = findMissingNumberBySorting(numbers);
console.log(`The missing number is: ${missing}`);