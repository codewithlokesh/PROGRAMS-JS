// Find factorial of a number (recursion/loop).
//6! = 6 × 5 × 4 × 3 × 2 × 1 = 720.

// function factorial(num){
//     let fac = 1;
//     if(num < 0) return "not defined for negative numbers"
//     if(num === 0) return 1
//     return num * factorial(num-1)
// }



function factorial(num){
    let fac = 1;
    if(num < 0) return "not defined for negative numbers"
    if(num === 0) return 1
    for(let i = 1; i<=num; i++){
        fac = fac * i
    }
    return fac
}
console.log(factorial(6))