// 1 2 3 4 5 
// 1 2 3 4 5 
// 1 2 3 4 5 
// 1 2 3 4 5 
// 1 2 3 4 5

function number(num) {
    let pattern = ""
    
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= num; j++) {
            pattern += j+ " "
        }
        pattern += "\n"
    }
    console.log(pattern)
}

number(5)