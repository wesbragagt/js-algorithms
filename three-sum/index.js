/**
Example
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
*/
const input = [-1, 0, 1, 2, -1, -4];
// O(n^2)
function threeSum(nums) {
  // need a sorted ascending list in order to know when to move the pointers
  const sorted = nums.sort((a, b) => a - b);
  const output = [];
  const map = new Map();
  // we set i iteration to go until the second to last element
  for (let i = 0; i < sorted.length - 2; i++) {
    // skip numbers we've passed
    if (i > 0 && sorted[i] === sorted[i - 1]) continue;
    // divide and conquer with two pointers
    let left = i + 1;
    let right = sorted.length - 1;
    while (left < right) {
      const sum = sorted[i] + sorted[left] + sorted[right];
      if (sum === 0) {
        const next = [sorted[i], sorted[left], sorted[right]]
        const id = `${sorted[i]}:${sorted[left]}:${sorted[right]}`
        if(!map.has(id)){
        output.push(next)
        map.set(id, next)
        }
        // We will move the pointers until we find a number that is not equal to each pointers current number
        left++;
        right--;
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return output;
}

console.log(threeSum(input))
