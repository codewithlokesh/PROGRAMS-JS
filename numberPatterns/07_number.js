//      1 2 3 4 5 4 3 2 1 
//        1 2 3 4 3 2 1 
//          1 2 3 2 1 
//            1 2 1 
//              1 


function number(num) {
    let pattern = ""
    for (let i = num; i >= 1; i--) {
        for (let j = 1; j <= num - i; j++) {
            pattern += "  "
        }
        for (let k = 1; k <= i; k++) {
            pattern += k + " "
        }
        for (let l = i-1; l >= 1; l--) {
            pattern += l + " "
        }

        pattern += "\n"
    }
    console.log(pattern)
}

number(5)