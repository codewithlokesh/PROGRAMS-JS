// * * * * *
// *     *
// *   *
// * *
// *

function downwardHolloTraingle(num) {
    let pattern = ""
    for (let i = num; i >= 1; i--) {
        for (let j = i; j >= 1; j--) {
            if (i == num  ||i ==1|| i==j || j==1)
                pattern += `* `
            else
                pattern += "  "
        }
        pattern += "\n"
    }
    console.log(pattern)
}
downwardHolloTraingle(9)