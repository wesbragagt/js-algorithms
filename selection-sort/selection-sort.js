const arr = [2,1,0,4,7,6,5]
function selectionSort(arr){
  // iterate over array
  // pick a minimum value
  // if another minimum value is found swap and set the new minimum
  // keep swapping
  // On^2
  let minIndex 
  for(let i  = 0; i < arr.length - 1; i++){
    minIndex = i
    for(let j = i + 1; j < arr.length; j++){
      if(arr[j] < arr[i]){
        minIndex = j
        const temp = arr[i] 
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}

console.log(selectionSort(arr))
