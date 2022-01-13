/* exported isAnagram */
function isAnagram(firstString, secondString) {
  // remove all spaces for string
  firstString = firstString.replace(/[^\w]|_/g, '');
  secondString = secondString.replace(/[^\w]|_/g, '');

  // Convert string to array, then sort characters then convert back to string
  firstString = firstString.split('').sort().join('');
  secondString = secondString.split('').sort().join('');

  // If the words are Anagrams then the sort function should have sorted both strings exactly the same so we check for that
  if (firstString === secondString) {
    return true;
  }
  return false;
}
