/*

//solution 1
function strRotation(str1, str2) {
  if(str1.length !== str2.length) {
  	return false
  } 
for(let i=0; i<str1.length; i++) {
	const rotation = str1.slice(i, str2.length) + str1.slice(0,i);
	console.log(rotation)
	if(rotation === str2) {
	 return  true;
	}
}
return false;

}

*/




//solution 2

function strRotation(str1 ,str2) {
	return str1.length === str2.length && (str1 + str2).includes(str2);
}


console.log(strRotation("arun", "naru"))
console.log(strRotation("rotation", "tationro"))