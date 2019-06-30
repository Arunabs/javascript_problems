function same(arr1, arr2) {
// check the array length is equal or not
if(arr1.length !== arr2.length) {
 return false;
}
var frequencyCounter1 = {};
var frequencyCounter2 = {};

for(var val of arr1) {
	    // square the value
        var mul = val ** 2;
        //push the value to object with count
       frequencyCounter1[mul] = ++frequencyCounter1[mul] || 1;
}
for(var val of arr2) {
	//push the value to object with count
       frequencyCounter2[val] = ++frequencyCounter2[val] || 1;
}

console.log(frequencyCounter1);
console.log(frequencyCounter2);
for(var val in frequencyCounter1) {
      // return false if the count of the val is not matching
     if(frequencyCounter1[val] != frequencyCounter2[val]) {
             return false;
     }
      
}
return true;
};

 same([1,2,3,2, 5], [9,1,4,4, 25])

 // O(m+n+k) => O(n)