/* exported isPalindromic */
function isPalindromic(string) {
  // Use regex codes to find and remove spaces from string, then convert second string to array, reverse it, and convert back to string and compare
  if (string.replace(/[^\w]|_/g, '') === string.replace(/[^\w]|_/g, '').split('').reverse().join('')) {
    return true;
  }
  return false;
}
