/*
Given two strings, write a function to determine if the second string is an anagram of the first.
an anagram is a word, phrase or name formed by rearranging the letters of another, such as cinema form iceman
*/

function validAnagram(str1, str2){
  // add whatever parameters you deem necessary - good luck!

  if(str1.length != str2.length ) {
      return false;
  }
  var strCount1 = {};
  
  for(var val of str1) {
      strCount1[val] = ++strCount1[val]  || 1;
  }

  for(var val of str2) {
      if(!strCount1[val]){
          return false;
      } 
      else if(strCount1[val] == 0) {
          delete strCount1[val];
      } else {
          strCount1[val] -= 1;
      }
  } 
 
 
return true;
}

validAnagram('abaa','aaba');