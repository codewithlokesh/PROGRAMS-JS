// * * * * *
// * * * *
// * * *
// * *
// *


function downwardLeftTraingle(num) {
    let pattern = ""
    for (let i = num; i >= 1; i--) {
        for (let j = i; j >= 1; j--) {
            pattern += `* `
        }
        pattern +="\n"
    }
    console.log(pattern)
}
downwardLeftTraingle(5)