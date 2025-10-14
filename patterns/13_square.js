function square(num) {
    let pattern = ""
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= num; j++) {
            pattern += "* "
        }
        pattern += "\n"
    }
     return console.log(pattern)
}
square(6)