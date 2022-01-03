/* exported titleCase */
function titleCase(title) {
  title = title.split(' ');
  const newTitle = [];
  let temp = null;
  for (let i = 0; i < title.length; i++) {
    temp = title[i];
    if ((temp.length > 2 && title[i] !== 'for' && title[i] !== 'the' && title[i] !== 'and' && title[i] !== 'but') || i === 0) {
      temp = title[i].charAt(0).toUpperCase() + title[i].slice(1);
      if (temp.includes('-')) {
        const [firstWord, secondWord] = temp.split('-');
        temp = firstWord + '-' + secondWord.charAt(0).toUpperCase() + secondWord.slice(1);
      }
      if (temp === 'Javascript') {
        temp = 'JavaScript';
      } else if (temp === 'Javascript:') {
        temp = 'JavaScript:';
      }
    } else if (temp.length <= 3 && title[i - 1].includes(':')) {
      temp = title[i].charAt(0).toUpperCase() + title[i].slice(1);
    }
    if (temp === 'Api') {
      temp = 'API';
    }
    newTitle.push(temp);
  }
  return newTitle.join(' ');
}
