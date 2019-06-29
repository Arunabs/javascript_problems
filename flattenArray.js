/*
Flatter Array

Instructions:

Write a function that will take an array of deeply nested arrays and extract every item, flattening the array.
It should return a new array that contains the items of each internal array, preserving order.

Input : Array 
output : Array

Examples:
flatten([[[[1],2],3],[4],[[5]]]);


-> [1,2,3,4,5,]



flatten(['abc',['def',['ghi',['jkl']]]]);
-> ['abc', def, ghi, jkl]
*/

function flatten(nestedArray) {

var newArray = [];

for(let i = 0; i < nestedArray.length; i++) {
     var item = nestedArray[i];

     if(Array.isArray(item)) {
     	const flatItem = flatten(item);
     	for(let j=0; j< flatItem.length; j++) {
     		newArray.push(flatItem[j])
     	}

     }
      else{
      	newArray.push(item)
      }
}
return newArray;
}

console.log(flatten(['abc',['def',['ghi',['jkl']]]]));

//Time O(n)
//Space O(n)


