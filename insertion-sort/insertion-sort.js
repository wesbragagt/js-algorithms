// Insertion sort

const list = [3,1,2,6,7, 0, 10, 20, 19]

// need to start on index 1 and look at the previous elements and see if the current element lesser than the previous and so forth
// Big O n^2
function insertionSort(arr){
  for(let i = 1; i < arr.length; i++){
    let numberToInsert = arr[i]
    let j = i - 1
    // Keep moving the numberToInsert to the left [6,7,0] -> [6,7,7] -> [6,0,7] -> [6,6,7] -> [0,6,7]
    while(numberToInsert < arr[j] && j > -1){
      arr[j+1] = arr[j]
      j--
    }
    arr[j+1] = numberToInsert
  }
  return arr
}
console.log(insertionSort(list))
