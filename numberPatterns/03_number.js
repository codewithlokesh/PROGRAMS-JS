//               1 
//            1 2 1 
//          1 2 3 2 1 
//        1 2 3 4 3 2 1 
//      1 2 3 4 5 4 3 2 1

function number(num){
    let pattern = ""
    for(let i=1; i<=num; i++){
        for(let j=1; j<=num-i; j++){
            pattern += "  "
        }
        for(let k=1; k<=i; k++){
            pattern += k+" "
        }
         for(let j = i-1; j>=1; j--){
            pattern += j+ " "
        }
        pattern += "\n"
    }

    console.log(pattern)
}

number(9)