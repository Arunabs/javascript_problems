/**
Write a function which takes array of sting as a input and returns commanly occuring 
string in that array 

if there are multiple string with  same high frequency
return the one that appears first in the array.


Array : Array of string
Output : string

*/

function highestFrequency(str) {
   const char = {};

   for(let i=0; i< str.length; i++) {   //O(n)
   	if(char[str[i]]) {
   		char[str[i]] = char[str[i]] + 1;
   	} else {
   		char[str[i]] = 1;
   	}
   }

var count = 0, val =''; 
   for(let key in char) { //O(n)
         if(char[key] > count) {
         	count = char[key];
         	val = key;
         }
   }
   return val;
}


console.log(
	highestFrequency(['a', 'b', 'a', 'c', 'b']), 
	highestFrequency(['ab','dd', 'ab', 'df','df','df']), 
	highestFrequency(['abs', 'abs','aa','aa','aa']),
	highestFrequency(['ram', 'sham', 'bham']));


// time O(n) + O(n) => O(2n) => O(n)

//space O(n) => O(n)