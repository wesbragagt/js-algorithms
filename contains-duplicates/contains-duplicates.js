/**
  * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true*/

const nums = [1,1,1,3,3,4,3,2,4,2]


// O(n^2)
function containsDuplicates(nums){
  let duplicates = false
  for(let i = 0; i < nums.length - 1; i++){
    for(let j = i + 1; j < nums.length; j++){
      if(nums[i] === nums[j]){
        duplicates = true
        break;
      }
    }
  }
  return duplicates
}

function containsDuplicatesEfficient(nums){
  return nums.length !== [...new Set(nums)].length
}

console.log(
  containsDuplicates(nums)
)

console.log(containsDuplicatesEfficient(nums))

