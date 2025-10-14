// Javascript program to find the array element
// that appears only once
let ar = [2, 3, 5, 4, 5, 3, 4];
let n = 7;

function findSingle(A, ar_size) {
    for (let i = 0; i < ar_size; i++) {
        let count = 0;
        for (let j = 0; j < ar_size; j++) {
            if (A[i] == A[j]) {
                count++;
            }
        }
        if (count == 1) {
            return A[i];
        }
    }
    return -1;
}
console.log("Element occurring once is " + findSingle(ar, n));