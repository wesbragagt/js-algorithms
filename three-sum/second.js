const input = [2, 1, 0, -1, -2, 0];
function threeSum(nums) {
  const output = [];
  const map = new Map();
  nums.forEach((num, i) => {
    map.set(num, i);
  });

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const pairSum = nums[i] + nums[j];
      if (map.has(pairSum * -1)) {
        const pair = map.get(pairSum * -1);
        const next = [nums[i], nums[j], nums[pair]].sort((a, b) => a - b);
        const tripletSum = pairSum + nums[pair];
        const id = next.join(":");
        const notSameIndex = i !== j && j !== pair && i !== pair;
        const notDuplicateTriplet = !map.has(id);
        if (tripletSum === 0 && notSameIndex && notDuplicateTriplet) {
          output.push(next);
          map.set(id, next);
        }
      }
    }
  }
  return output;
}

console.log(threeSum(input));
