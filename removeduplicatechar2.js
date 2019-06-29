/**
remove duplicate char from the string

*/

function removeDuplicateChar(str) {
  var uniqchar = [];
  const char = {};

  for(let i=0; i< str.length; i++) {. //  O(n)
  	   if(char[str[i]] === true) {  
  	   	continue;
  	   } else {
  	   	uniqchar.push(str[i]);
  	   	char[str[i]] = true;

  	   }
  }
  return uniqchar.join('')
}


console.log(removeDuplicateChar("abcd"), removeDuplicateChar("bbacddhee"));
//Time O(n)   => O (n)
//Space O(n)