// * * * * *
//   * * * *
//     * * *
//       * *
//         *

function downwardRightTriangle(num) {
    let pattern = ""
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= i; j++) {
            pattern += "  "
        }
        for (let k = 1; k <= num-i; k++) {
            pattern += ` ${i}`
        }
        pattern += "\n"
    }
    console.log(pattern)
}
downwardRightTriangle(8)