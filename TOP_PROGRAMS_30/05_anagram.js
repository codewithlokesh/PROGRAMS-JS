// 5.	Check if two strings are anagrams of each other.

// const isAnagram = (s1, s2)=>{
//    return s1.split('').sort().join('') === s2.split('').sort().join('')

// }
// console.log(isAnagram('listen',"silent"))

function isAnagram(str1, str2) {
   if (str1.length !== str2.length) {
      return false
   }

   let freq1 = {}
   let freq2 = {}
   for (let i = 0; i < str1.length; i++) {
      let char = str1[i]
      freq1[char] ? freq1[char] += 1 : freq1[char] = 1
   }

   for (let i = 0; i < str2.length; i++) {
      let char = str2[i]
      freq2[char] ? freq2[char] += 1 : freq2[char] = 1
   }
   for (let keys in freq1) {
      if (freq1[keys] !== freq2[keys]) {
         return false
      }
   }
   //   console.log(freq1)
   //   console.log(freq2)
   return true
}

console.log(isAnagram("silent", "listen"))