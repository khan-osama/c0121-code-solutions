/* exported difference */
function difference(first, second) {
  const firstDifference = first.filter(values => !second.includes(values));
  const secondDifference = second.filter(values => !first.includes(values));

  const joinedDifference = firstDifference.concat(secondDifference);

  return joinedDifference;

}
