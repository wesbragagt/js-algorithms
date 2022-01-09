/**
  * Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.

 

Example 1:

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
Example 2:

Input: nums = [0,0,0], target = 1
Output: 0*/

const input = [-1, 2, 1, -4];

function threeSumClosest(nums, target) {
 const sorted = nums.sort((a,b) => a-b) 
  // initiate a stupid number just in case we don't go over
  let closestSum = 9999
  for (let i = 0; i < sorted.length - 2; i++) {
    
    let left = i + 1;
    let right = sorted.length - 1;
    
    while (left < right) {
      const sum = sorted[i] + sorted[left] + sorted[right]  
      if (Math.abs(target - closestSum) > Math.abs(target - sum)){
        closestSum = sum
      }      
      else if(sum > target){
         right--
      } 
      else{
        left++
      }
    }
  }
  return closestSum}

console.log(threeSumClosest(input, 1));
