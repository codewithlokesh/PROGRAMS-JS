let arr = ["scale", "happy", "strength", "peace", "happy", "happy"];

function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log(removeDuplicates(arr));


// using foreach method
console.log("---------------------------")
let arr1 = ["scale", "happy", "strength",
    "peace", "happy", "happy"
];

function removeDuplicates(arr1) {
    let unique = [];
    arr1.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element);
        }
    });
    return unique;
}

console.log(removeDuplicates(arr1));