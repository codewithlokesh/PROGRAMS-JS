//                 1 
//               2 1 
//             3 2 1 
//           4 3 2 1 
//         5 4 3 2 1 


function number(num) {
    let pattern = ""
    for (let i = 1; i <= num; i++) {
        for(let j = 1; j<=num-i; j++){
            pattern += "  "
        }
        for(let k = i; k>=1; k--){
            pattern += k+ " "
        }
        pattern += "\n"
    }
    console.log(pattern)
}
number(5)