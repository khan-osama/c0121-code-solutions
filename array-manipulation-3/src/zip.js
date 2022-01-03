/* exported zip */
function zip(first, second) {
  const zippedArray = first.map(function (value, index) {
    return [value, second[index]];
  });
  const subArray = zippedArray[zippedArray.length - 1];
  if (!subArray[subArray.length - 1]) {
    zippedArray.pop();
  }
  return zippedArray;
}
