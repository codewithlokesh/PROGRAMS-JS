//         *
//       * * *
//     * * * * *
//   * * * * * * *
// * * * * * * * * *

function pyramid(num) {
    let pattern = ""
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= num - i; j++) {
            pattern += "  "
        }
        for (let k = 1; k <= (i*2)-1; k++){
            pattern +="* "
        }
        pattern += "\n"
    }
    console.log(pattern)
}
pyramid(5)