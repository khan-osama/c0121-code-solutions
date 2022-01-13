/* exported union */
function union(first, second) {
  const unionArray = first.concat(second);
  const uniqueArray = [];

  for (let i = 0; i < unionArray.length; i++) {
    if (uniqueArray.indexOf(unionArray[i]) === -1 && unionArray[i] !== '') {
      uniqueArray.push(unionArray[i]);
    }
  }
  return uniqueArray;
}
