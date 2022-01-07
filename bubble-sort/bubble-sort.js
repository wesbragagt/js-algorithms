const arr = [2, 1, 0, 4, 7, 6, 5];

function bubbleSort(arr) {
  let swapped;
  // keep swapping until no swaps are made which means the array is sorted
  // do while garantees the loop will be performed at least once
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        swapped = true;
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  } while (swapped);
  return arr;
}

console.log(bubbleSort(arr));
