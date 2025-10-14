// * * * * *
// *       *
// *       *
// *       *
// * * * * *

function holloSquare(num) {
    let pattern = ""
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= num; j++) {
            if(i==1 || i==num || j==1 || j==num){
                pattern += "* "
            }else{
                pattern += "  "
            }
        }
        pattern += "\n"
    }
    return console.log(pattern)
}
holloSquare(6)