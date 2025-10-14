// reverse the string words

function reverseWords(str) {
    let reversed = '';
    let word = '';
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === ' ') {
        reversed = word + ' ' + reversed;
        word = '';
      } else {
        word += str[i];
      }
    }
  
    reversed = word + ' ' + reversed;
    return reversed;
  }
  
  // Example usage
  const inputString = 'Hello World! OpenAI is awesome';
  
  const reversedWords = reverseWords(inputString);
  console.log('Reversed Words:', reversedWords);
  