//Find the greatest common divisor (GCD).

function findGCD(a,b){
    let gcd = 1;
    for(let i =0; i<=a && i<=b; i++){
        if(a%i===0 && b%i===0){
            gcd = i
        }
    }
    return gcd
}

console.log(findGCD(12,18))