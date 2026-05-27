Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).



// arr of nums ! str boolean function
// return sum
// function sumOfDifferences(arr){
//
// }
// sumOfDifferences(15,21,10)
// returns (21 - 15) + (15 - 10)
// if the arr length is equal to or less than 1 then return 0
// then sort the arr in descending order 
// then return sorted arr index 0 minus last index
function sumOfDifferences(arr) {
  if (arr.length <= 1) return 0;
  const sorted = arr.sort((a, b) => b - a);
  return sorted[0] - sorted[sorted.length - 1];
}