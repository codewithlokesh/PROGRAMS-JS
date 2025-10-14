// 1 1 1 1 1 
// 2       2 
// 3       3 
// 4       4 
// 5 5 5 5 5 

function number(num) {
    let pattern = ""

    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= num; j++) {
            if (i==1|| i==num || j==1 || j==num){
                pattern += i+ " "
            }else{
                pattern += "  "
            }
        }
        pattern += "\n"
    }
    console.log(pattern)
}

number(5)