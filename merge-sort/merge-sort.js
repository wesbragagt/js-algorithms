// Merge sort algorithm

function sort(arr) {
  const merge = (left, right) => {

    const result = [];

    while (left.length > 0 && right.length > 0) {

      if (left[0] <= right[0]) {

        result.push(left.shift());

      } else {

        result.push(right.shift());

      }
    }

    return result.concat(left, right);
  };

  if (arr.length < 2) return arr;
  const length = arr.length;
  const mid = Math.floor(length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(sort(left), sort(right));
}

const generateRandomNumbers = (howMany) => new Array(howMany).fill().map(() => Math.floor(Math.random() * 100) + 1)
console.log(
  sort(
    generateRandomNumbers(100)
  )
);
