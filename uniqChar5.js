
/**
function to check the uniq char in the word 
space complexity O(n)
time complexity -> 
sort  loop O(n) * log(n)
for  loop O(n)
O(n) + O(n) * log(n) =>  O(n)* (1 + log(n)) => O(n) * log(n)

*/

function uniqChar (str){

return new Set(str).size === str.length;

}
console.log(uniqChar('abs'));
console.log(uniqChar('test'));
console.log(uniqChar('Raam'));
console.log(uniqChar('soma'));


//Time O(n)
//Space O(n)