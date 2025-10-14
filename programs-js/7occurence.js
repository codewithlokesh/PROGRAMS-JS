const arr = ['a', 'b', 'a', 'a', 'c', 'c',"a"];

const count = {};

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (count[element]) {
        count[element] += 1;
    } else {
        count[element] = 1;
    }
}

console.log(count);