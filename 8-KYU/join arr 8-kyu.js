Sentence Smash
Write a function that takes an array of words and smashes them together
into a sentence and returns the sentence. 
You can ignore any need to sanitize words or add punctuation,
but you should add spaces between each word. 
Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// arr ! num boolean function arr
// return
// function smash (words){
// return words.join(" ");
// }
// smash(['these', 'words'])
// returns 'these words'
// We are passing an array of words as the parameter,
// We need to join the words from the array into a string
// We can return the solution using the .join method
// which will join the arr into a str
function smash (words) {
   return words.join(' ');
};