
/**
write a function which accepts 2 array.

the array can have both string and number


return true if second array is subset of first one

in other words, determine if every item in the 2nd array present somewhere in the first one

*/

//solution 1
/*
function arraySubset(superSet, subSet) {

	if(subSet.length > superSet.length) {
		return false;
	}
  const superCopy = [...superSet]
	for(let i =0; i< superCopy.length; i++){ //O(m)
		const indexval = superCopy.indexOf(subSet[i]); //O(n)
		if(indexval === -1) {
			return false;
		} 
		delete superCopy[indexval]
	}
	return true;
 
}

//time   O(m * n)
//space   O(m)
*/

//solution 2


function arraySubset(superSet, subSet) {
	const count = {};
     
	for(let i=0; i< superSet.length; i++) { // O(m)
		if(count[superSet[i]]){
			count[superSet[i]] = count[superSet[i]] + 1;
		} else {
			count[superSet[i]] = 1;
		}
	}

	for(let j=0; j < subSet.length; j++) { //O(n)
		if(count[subSet[j]] === undefined) {
			return false
		}

		count[subSet[j]]--;

		if(count[subSet[j]] === 0) {
			delete count[subSet[j]];
		}
	}

	return true;

}

console.log(arraySubset([1,2,3],[1,2,3]));
console.log(arraySubset([1,2,3,4],[1,2,3]));
console.log(arraySubset([1,2,4],[1,2,3]));
console.log(arraySubset([1,2,4],[1,2,5,3]));
console.log(arraySubset([1,2,3,4],[1,1,1]));

//time  O(m+n)
//space O(m)
