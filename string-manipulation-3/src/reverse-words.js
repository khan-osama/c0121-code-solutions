/* exported reverseWords */
function reverseWords(string) {
  // convert string to array
  string = string.split(' ');
  // create new array for reversed words
  const reversedWords = [];
  // loop through the original array, split each word, reverse it and then join it
  for (let i = 0; i < string.length; i++) {
    const newWord = string[i].split('').reverse().join('');
    // push reversed word into new array
    reversedWords.push(newWord);
  }
  // join sentence back together by converting array to string with spaces
  return reversedWords.join(' ');
}
