//Program to print all distinct elements in a given array

let arr = [6, 10, 5, 4, 9, 120, 4, 6, 10];
n = arr.length;

function printDistinct(arr, n) {
    for (let i = 0; i < n; i++) {
        // Check if the picked element is already printed
        var j;
        for (j = 0; j < i; j++)
            if (arr[i] == arr[j])
                break;

            // If not printed earlier, then print it
        if (i == j)
            console.log(arr[i] + " ");
    }
}
printDistinct(arr, n);