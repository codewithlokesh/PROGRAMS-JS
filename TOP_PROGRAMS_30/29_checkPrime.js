//Print all prime numbers up to n.

let num = 17;
for (let i = 2; i <= num; i++) {
    let prime = true;
    for (let j = 2; j < i; j++) { // j < i, not j <= i
        if (i % j === 0) {
            prime = false;
            break;
        }
    }
    if (prime) {
        console.log(i);
    }
}

