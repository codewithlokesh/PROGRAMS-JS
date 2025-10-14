let str = "lokeshesssh";
let duplicateStatus = false;

for (let i = 0; i < str.length; i++) {
    duplicateStatus = true;
    for (let j = i + 1; j < str.length; j++) {
        if (str[i] == str[j]) {
            duplicateStatus = false;
            break;
        }
    }
    if (duplicateStatus) {
        console.log(str[i]);
    }
}