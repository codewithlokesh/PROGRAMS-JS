// * * * * * * * * *
//   * * * * * * *
//     * * * * *
//       * * *
//         * 

function downwardPyramid(num){
    let pattern= ""
    for(let i=num; i>=1; i--){
        for(let k=1; k<=(num-i); k++){
            pattern += "  "
        }
        for(let j=1; j<=i*2-1; j++){
            pattern +="* "
        }
        pattern +="\n"
    }
    console.log(pattern)
}
downwardPyramid(5)