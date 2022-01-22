/**
  *Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
  * */

const arr = [-1, 0, 3, 5, 9, 12];
// Iterative solution
function binarySearch(arr, target) {
  let start = 0;
  let mid;
  let end = arr.length - 1;
  let index = -1;
  let found = false;

  while (!found && start <= end) {
    mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      index = mid;
      found = true;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return index;
}

console.log(binarySearch(arr, 9));

function binarySearchRecursive(arr, target, start, end) {
  if (start === undefined) start = 0;
  if (end === undefined) end = arr.length - 1;

  const mid = Math.floor((start + end) / 2);

  // not found
  if (start > end && arr[mid] !== target) return -1;

  if (arr[mid] > target)
    return binarySearchRecursive(arr, target, start, mid - 1);
  if (arr[mid] < target)
    return binarySearchRecursive(arr, target, mid + 1, end);

  // found
  return mid;
}

console.log(binarySearchRecursive(arr, 12));
