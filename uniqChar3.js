
/**
function to check the uniq char in the word 
space complexity O(n)
time complexity -> 
sort  loop O(n) * log(n)
for  loop O(n)
O(n) + O(n) * log(n) =>  O(n)* (1 + log(n)) => O(n) * log(n)

*/

function uniqChar (str){

var char = {};
for(let i=0; i<str.length; i++) {
	if(char[str[i]] === true) {
       return false;
	}
	char[str[i]] = true;

}
return true;

}
console.log(uniqChar('abs'));
console.log(uniqChar('test'));
console.log(uniqChar('Raam'));
console.log(uniqChar('soma'));