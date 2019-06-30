/*maxSubArraySum


Write a function called maxSubArraySum which accepts an array of integers and a number called n.
the function should calculate the maximum sum of n consecutive elements in the array.


ex: maxSubArraySum([1,2,5,2,8,1,5],2); // 10
 	maxSubArraySum([1,2,5,2,8,1,5],4); // 17
 	maxSubArraySum([4,2,1,6],1) //6
 	maxSubArraySum([4,2,1,6],4) // 13
 	maxSubArraySum([],4) // null



*/

function maxSubarraySum(arr, num) {
  if ( num > arr.length){
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i ++){
    temp = 0;
    for (let j = 0; j < num; j++){
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3],3)


//Refactored one


function maxSubarraySum(arr, num){
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3],3)
