/* A simple program to print subarray
with sum as given sum */

let arr = [15, 2, 4, 8, 9, 5, 10, 23];
let n = arr.length;
let sum = 23;

function subArraySum(arr, n, sum) {

    for (let i = 0; i < n; i++) {
        let currentSum = arr[i];

        if (currentSum == sum) {
            console.log("Sum found at indexes " + i);
            return;
        } else {
            for (let j = i + 1; j < n; j++) {
                currentSum += arr[j];

                if (currentSum == sum) {
                    console.log("Sum found between indexes " +
                        i + " and " + j);
                    return;
                }
            }
        }
    }
    console.log("No subarray found");
    return;
}


subArraySum(arr, n, sum);

// This code is contributed by garg28harsh.