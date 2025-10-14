//     1 
//     2 3 
//     4 5 6 
//     7 8 9 10 


function number(num) {
    let pattern = ""
    let n = 1
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= i; j++) {
            pattern  +=  n + " "
            n++
        }
        pattern += "\n"
    }
    console.log(pattern)
}

number(4)