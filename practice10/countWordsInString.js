//count words in given string. 

const sentence = "this is sample sentence";
const words = [];
let word = '';

for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];

    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || char === "'") {
        word += char;
    } else if (word !== '') {
        words.push(word);
        word = '';
    }
}

if (word == '') {
    console.log("lokesh " + words.push(word));
}

console.log(words);
console.log(words.length);