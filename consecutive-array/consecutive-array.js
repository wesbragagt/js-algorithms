/**
 * Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

Example

For statues = [6, 2, 3, 8], the output should be
solution(statues) = 3.

Ratiorg needs statues of sizes 4, 5 and 7.

*/
function solution(statues) {
    // sort the statues in order 
    // [ 2, 3, 6, 8]
    // if next - curr = 1
    // merge sort 
    const sorted = [...statues].sort((a,b) => a - b);
    
    let curr = 0
    let next = 1
    const elements = []
    
    while(sorted[next]){
      let digitsMissing = (sorted[next] - sorted[curr]) - 1 
      let amountToAdd = 0
      while(amountToAdd < digitsMissing){
          amountToAdd++
          elements.push(sorted[curr] + amountToAdd)
      }
      curr++
      next++
    }
    console.log(elements)
    
    return elements.length
}

console.log(
  solution([6, 2, 3, 8])
) // 3
