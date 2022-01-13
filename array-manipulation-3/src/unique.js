/* exported unique */
function unique(array) {
  const uniqueArray = [];

  for (let i = 0; i < array.length; i++) {
    if (uniqueArray.indexOf(array[i]) === -1 && array[i] !== '') {
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray;
}
