const arr = [2, 1, 0, 4, 7, 6, 5];
function quickSort(arr) {
  if (arr.length < 2) return arr;
  // pivot
  const last = arr.length - 1;
  const pivot = arr[arr.length - 1];

  const left = [];
  const right = [];

  for (let i = 0; i < last; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
console.log(quickSort(arr));
