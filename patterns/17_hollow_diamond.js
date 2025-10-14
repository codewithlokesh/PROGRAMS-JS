//                          *
//                        *   *
//                      *       *
//                    *           *
//                  *               *
//                    *           *
//                      *       *
//                        *   *
//                          *



function hollowDiamond(num) {
    let pattern = ""
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= num - i; j++) {
            pattern += "  "
        }
        for (let k = 1; k <= i * 2 - 1; k++) {
            if (k == 1 || k == i * 2 - 1) {
                pattern += "* "
            } else {
                pattern += "  "
            }
        }
        pattern += "\n"
    }
    for (let i = num - 1; i >= 1; i--) {
        for (let j = 1; j <= num - i; j++) {
            pattern += "  "
        }
        for (let k = 1; k <= i * 2 - 1; k++) {
            if (k == 1 || k == i * 2 - 1) {
                pattern += "* "
            } else {
                pattern += "  "
            }
        }
        pattern += `\n`
    }
    console.log(pattern)
}
hollowDiamond(5)