// 1 2 3 4 5 
// 1 2 3 4 
// 1 2 3 
// 1 2 
// 1 

function number(num){
    let pattern = ""
    for(let i= num; i>=1; i--){
        for(let j=1; j<=i; j++){
            pattern += `${j} `
        }
        pattern += "\n"
    }
    console.log(pattern)
}

number(5)