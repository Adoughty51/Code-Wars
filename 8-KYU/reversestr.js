Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'

// str ! num boolean funtion arr
// return
// function solution(str){
// return str.split(" ").reverse().join(" ");
//}
// solution(john) returns "nhoj"
// I start by splitting the string into an arr 
// then using the reverse method to reverse the elements in the arr
// finally join the reversed arr back into a str
function solution(str){
  return str.split("").reverse().join("")
}