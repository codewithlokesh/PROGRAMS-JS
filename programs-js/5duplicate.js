var arr = [1, 2, 3, 4, 5, 1, 2];
var count = 0;
for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            count++;
            break;
        }
    }
}
console.log("Duplicate elements :" + count);