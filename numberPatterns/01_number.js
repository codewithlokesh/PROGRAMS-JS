// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5 

function number(num){
    let numberStr = ""
    for(let i=1; i<=num; i++){
        for(let j=1; j<=i; j++){
            numberStr += `${j} `
        }
        numberStr += "\n"
    }
    console.log(numberStr)
}
number(5)