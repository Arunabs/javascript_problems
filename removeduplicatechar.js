/**
remove duplicate char from the string

*/

function removeDuplicateChar(str) {
  var char = new Set(str); // O(n)
  return Array.from(char).join('') // O(n) + O(n)
}


console.log(removeDuplicateChar("abcd"), removeDuplicateChar("bbacddhee"));
//Time O(n) + O(n) + O(n) => O(3n) => O(n)
//Space O(n) + O(n) => O(2n) => O(n)