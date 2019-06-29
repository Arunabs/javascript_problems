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
   let highFrequency = 0;
   let highFrequencychar = str[0];

   for(let i=0; i< str.length; i++) {   //O(n)
   	if(char[str[i]]) {
   		char[str[i]] = char[str[i]] + 1;
   	} else {
   		char[str[i]] = 1;
   	}

      if( char[str[i]] > highFrequency) {
         highFrequency =  char[str[i]];
         highFrequencychar = str[i];
      }
   }


   return highFrequencychar;
}


console.log(
	highestFrequency(['a', 'b', 'a', 'c', 'b']), 
	highestFrequency(['ab','dd', 'ab', 'df','df','df']), 
	highestFrequency(['abs', 'abs','aa','aa','aa']),
	highestFrequency(['ram', 'sham', 'bham']));


// time O(n)  => O(n)

//space O(n)  => O(n)