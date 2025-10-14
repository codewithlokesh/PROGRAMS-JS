//Check if a number is perfect square.


function checkSquare(num) {
    for (let i = 1; i * i <= num; i++) {
        if (i * i === num) return true;
    }
    return false;
}

console.log(checkSquare(256)); // true

//---------------------------------------------------------------
function checkSquare2(num) {
    let square = false;
    for (let i = 1; i <= num; i++) {
        if (i * i === num){
            square = true;
            break;
        }
    }
    return square
}

console.log(checkSquare2(25))