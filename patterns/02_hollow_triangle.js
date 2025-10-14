// *
// * *
// *   *
// *     *
// * * * * *

function hollowLeftTriangle(num) {
    let pattern = ""
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= i; j++) {
            if (i == 1 || i == num || j == 1 || j == i)
                pattern += `* `
            else
                pattern += "  "
        }
        pattern += "\n"
    }
    console.log(pattern)
}
hollowLeftTriangle(5)