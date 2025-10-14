// Javascript program to find smallest and
// second smallest elements

function solution(arr, arr_size) {
    let first = Number.MAX_VALUE,
        second = Number.MAX_VALUE;

    /* There should be atleast two elements */
    if (arr_size < 2) {
        console.log(" Invalid Input ");
        return;
    }
    /* find the smallest element */
    for (let i = 0; i < arr_size; i++) {
        if (arr[i] < first) {
            first = arr[i];
        }
    }
    /* find the second smallest element */
    for (let i = 0; i < arr_size; i++) {
        if (arr[i] < second && arr[i] > first) {
            second = arr[i];
        }
    }
    if (second == Number.MAX_VALUE)
        console.log("There is no second smallest element\n");
    else
        console.log("The smallest element is " + first + " and second " +
            "Smallest element is " + second + '\n');
}


// Driver program

let arr = [12, 13, 1, 10, 34, 1];
let n = arr.length;
solution(arr, n);