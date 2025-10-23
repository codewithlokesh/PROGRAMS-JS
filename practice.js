function longestSubstring(str) {
  let longest = 0;
  let current
  for (let i = 0; i < str.length; i++) {
     current = "";

    for (let j = i; j < str.length; j++) {
      if (current.includes(str[j])) {
        break; // stop if repeating character found
      }
      current += str[j]; // build substring
    }
    longest = Math.max(longest, current.length);
  }

  return longest+ ", "+current;
}

console.log(longestSubstring("abcabcbb")); // 3
console.log(longestSubstring("bbbbb"));    // 1
console.log(longestSubstring("pwwkew"));   // 3
