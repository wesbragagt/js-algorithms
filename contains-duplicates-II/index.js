/**
  * Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

 

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true
Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true
Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false
 */

function containsNearbyDuplicates(nums, k) {
  const hash = new Map();
  for (let i = 0; i < nums.length; i++) {
    // doesn't have in the hash
    if (hash.has(nums[i])) {
      const j = hash.get(nums[i]);
      // return quick as soon as found
      if (Math.abs(i - j) <= k) {
        return true
      }
    } 
    // keep replacing numbers
    hash.set(nums[i], i)
  }
  // nothing was found
  return false
}

console.log(containsNearbyDuplicates([1, 2, 3, 1, 2, 3], 2));
