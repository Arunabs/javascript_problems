
/**
function to check the uniq char in the word 
space complexity O(n)
time complexity -> 
sort  loop O(n) * log(n)
for  loop O(n)
O(n) + O(n) * log(n) =>  O(n)* (1 + log(n)) => O(n) * log(n)

*/

function uniqChar (str){
	var char = str.split('').sort();

for(let i=1; i<char.length; i++) {
	if(char[i] === char[i-1]) {
		return false;
	}
}
	return true;
}


console.log(uniqChar('abs'));
console.log(uniqChar('test'));
console.log(uniqChar('Raam'));
console.log(uniqChar('soma'));