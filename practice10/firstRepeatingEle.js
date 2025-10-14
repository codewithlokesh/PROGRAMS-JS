const arr = [1, 2, 2, 2, 3, 3];
let element = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            element = arr[i]
            break;
        }
    }

    if (element !== 0)
        break;
}
(element != null) ? console.log("found : " + element): console.log("not found : " + element);