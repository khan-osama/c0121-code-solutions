console.log('Lodash is loaded:', typeof _ !== 'undefined');

//Setup for players
let players = [
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

//Setup for deck creation objects
const deck = {

  number: ['ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king'],
  suit: ['club', 'diamond', 'hearts', 'spades']

};

function cardGame() {
  //Create deck
  let cardsFromDeck = [];
  for (let i = 0; i < deck.suit.length; i++) {
    for (let j = 0; j < deck.number.length; j++) {
      let cardObj = {};
      cardObj['suit'] = deck.suit[i];
      cardObj['number'] = deck.number[j];
      cardsFromDeck.push(cardObj);
    }
  }
  //Shuffle then deal the cards
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 2; j++) {
      let shuffledDeck = _.shuffle(cardsFromDeck)
      players[i].hand.push(shuffledDeck[j]);
    }
  }

  //Convert face cards to score
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 2; j++) {
      if (players[i].hand[j].number === 'jack' || players[i].hand[j].number === 'queen' || players[i].hand[j].number === 'king') {
        players[i].hand[j].number = 10;
      } else if (players[i].hand[j].number === 'ace') {
        players[i].hand[j].number = 11;
      }
    }
  }

  //Figure out score for cards
  let playerScoreArray = [];

  for (let i = 0; i < 4; i++) {
    for (let j = 0; i < 4; i++) {
        playerScore = players[i].hand[j].number + players[i].hand[j + 1].number;
        playerScoreArray.push(playerScore);
    }
  }

  //Find winner
  const maxScore = Math.max(...playerScoreArray);
  const indexOfMax = playerScoreArray.indexOf(maxScore);
  console.log(players[indexOfMax].name);
}
