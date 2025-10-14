//         *
//       * *
//     *   *
//   *     *
// * * * * *



function hollowRightTriangle(num){
    let pattern = ""
    for(let i = 1; i<=num; i++){
        for(let j = 1; j<=(num-i); j++){
            pattern += `  `
        }
        for(let k = 1; k<=i; k++){
            if(i==1|| i==num || k==1 || k==i){
                pattern += `* ` 
            }else{
                pattern += "  "
            }
        }
        pattern +=`\n`
    }
    console.log(pattern)
}
hollowRightTriangle(8)