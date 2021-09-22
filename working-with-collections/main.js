console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [
  {
    name: 'Osama',
    hand: []
  },
  {
    name: 'Josh',
    hand: []
  },
  {
    name: 'Larry',
    hand: []
  },
  {
    name: 'Veronica',
    hand: []
  }

];

console.log(_.map(players));
