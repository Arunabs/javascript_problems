
/**
function to check the uniq char in the word 
space complexity O(n)
time complexity -> 
outer for loop O(n)
inner(lastIndexOf)  loop O(n)
O(n) *O(n) => O(n^2)


*/

function uniqChar (str){

for(let i=0; i<str.length; i++) {
	if(str.lastIndexOf(str[i]) !== i) {
		return false;
	}
}
	return true;
}


console.log(uniqChar('abs'));
console.log(uniqChar('test'));
console.log(uniqChar('Raam'));
console.log(uniqChar('soma'));