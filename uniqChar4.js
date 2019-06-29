
/**
function to check the uniq char in the word 
space complexity O(n)
time complexity -> 
sort  loop O(n) * log(n)
for  loop O(n)
O(n) + O(n) * log(n) =>  O(n)* (1 + log(n)) => O(n) * log(n)

*/

function uniqChar (str){

var char = new Set();
for(let i=0; i<str.length; i++) {
	var temp = str[i];
	if(char.has(temp)) {
       return false;
	}
	char.add(temp)

}
return true;

}
console.log(uniqChar('abs'));
console.log(uniqChar('test'));
console.log(uniqChar('Raam'));
console.log(uniqChar('soma'));