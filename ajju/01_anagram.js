// write a function to check string is anagram or not

function areAnagrams(str1, str2) {
    // If lengths are different, they can't be anagrams
    if (str1.length !== str2.length) {
        return false;
    }

    // Convert strings to arrays, sort them, and join back to strings
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    // Compare the sorted strings
    return sortedStr1 === sortedStr2;
}

// Example usage:
const string1 = "listen";
const string2 = "silent";
console.log(areAnagrams(string1, string2)); // Output: true
