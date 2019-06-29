/**
remove duplicate char from the string

*/

function removeDuplicateChar(str) {
  var uniqchar = [];

  for(let i=0; i< str.length; i++) {. //  O(n)
  	   if(uniqchar.includes(str[i])) {  // for includes  O(n)
  	   	continue;
  	   } else {
  	   	uniqchar.push(str[i]);
  	   }
  }
  return uniqchar.join('')
}


console.log(removeDuplicateChar("abcd"), removeDuplicateChar("bbacddhee"));
//Time O(n)  * O(n) => O (n^2)
//Space O(n)