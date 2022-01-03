/* exported intersection */
function intersection(first, second) {
  const intersectedArray = first.filter(values => second.includes(values));

  return intersectedArray;
}
