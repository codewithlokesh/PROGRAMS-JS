// * * * * *
//   *     *
//     *   *
//       * *
//         *


function downwardHolloRightTriangle(num){
    let pattern = ""
    for(let i =1; i<=num; i++){
        for(let j = 1; j<=i; j++){
            pattern += "  "
        }

        for(let k = num; k>=i; k--){
            if(i == 1 || i==num || k==i || k==num ){
                pattern += ` ${"*"}`
            }else{
                pattern += `  `
            }
        }
        pattern +="\n"
    }
    console.log(pattern)
}
downwardHolloRightTriangle(8)