//         *
//       * *
//     * * *
//   * * * *
// * * * * *



function rightTriangle(num) {
    let pattern = ""
    for (let i = 1; i <= num; i++) {
        for (let j = num; j >= i; j--) {
            pattern += "  "
        }
        for (let k = 1; k <= i; k++) {
            pattern += "* "
        }
        pattern += "\n"
    }
    console.log(pattern)
}
rightTriangle(8)