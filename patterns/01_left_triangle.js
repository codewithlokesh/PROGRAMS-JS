// *
// * *
// * * *
// * * * *
// * * * * *


function leftTriangle(num){
    let pattern = ""
    for(let i = 0; i<=num; i++){
        for(let j = 0; j<=i; j++){
            pattern += "* "
        }
        pattern += "\n"
    }
    console.log(pattern)
}

leftTriangle(5)