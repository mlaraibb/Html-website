
const suits = ['♣','♦', '♥', '♠']
const values = ['A','2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
const trueValue = {
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  "10": 10,
  "J": 11,
  "Q": 12,
  "K": 13,
  "A": 14, }
let player1Deck = []
let player2Deck = [] 
let player1Won= []
let player2Won= []
let tied =[]


class Card {
  constructor(suit, value,) {
    this.suit = suit;
    this.value = value;
   
  }

}

class Deck {
  constructor(cards) {
    this.cards = this.makeADeck();

  }
// the makeCards function takes the suits and values array and returns and array of 52 card objects.
  makeADeck() {
    return suits.flatMap((suit) => {
      return values.map((value) => {
        return new Card(suit, value);
      });
    });
  }  
// shuffle deck takes the deck of cards, which after makeCards() are organized sequentially and shuffles them 
shuffleDeck(){
  for(let i= this.cards.length -1 ; i > 0; i--){
    const shuffled = Math.floor(Math.random()*i);
    const oldValue = this.cards[shuffled]
    this.cards[shuffled]=this.cards[i]
    this.cards[i]=oldValue
  }
}

}
// distributeDeck creates a new Deck, which itself invokes the makeCards function and creates a new deck of 52 cards. It then shuffles the deck and distributes them evenly between the two different players, defined here as player1Deck and player2Deck
function distributeDeck(){
let deck = new Deck
deck.shuffleDeck()
console.log(deck)
const halfDeck = deck.cards.length/2
console.log(halfDeck)
player1Deck = deck.cards.slice(0,halfDeck)
player2Deck = deck.cards.slice(halfDeck,deck.cards.length)
console.log(player1Deck)
console.log(player2Deck)
}



distributeDeck()


//The war function below is the heart of the game, using a for loop it iterated through the two arrays, compares their values and console logs the results. To let the code know that one card has a higher value than the other I created an object called trueValue, and I pass the decks through them with the value property so that it knows and Ace's value is equal to 14. To be able to measure who wins, after every round I push an element to one of three arrays representing a win by player one, two or a tied round. 
function war(){
  let round = 1
  for (let i = 0; i < player1Deck.length; i++) {
    console.log('--Round--'+ " "+ round)
    console.log(`Player 1 card was ${player1Deck[i].value + " " + "of" + " "+ player1Deck[i].suit}`);
    console.log(`Player 2 card was ${player2Deck[i].value + " " + "of" + " "+ player2Deck[i].suit}`);
    round++
    if(trueValue[player1Deck[i].value]>trueValue[player2Deck[i].value]){
      console.log('*Player 1 won*')
      player1Won.push('1')}
        else if(trueValue[player1Deck[i].value]<trueValue[player2Deck[i].value]){
          console.log('*Player 2 won*')
          player2Won.push('1')
        }else{console.log('*The round was a tie*')
      tied.push('1')}
  };

  }
//To determine the overall winner, I compare the lengths of the arrays that I was pushing to after the victory conditions in the above function. I then alert the browser with the specifics, of who won, how many rounds they won and how many rounds the opposing player won. 
  function whoIsWinner(){
    if(player1Won.length > player2Won.length){
      alert(`Player 1 is victorious! They won ${player1Won.length} rounds. Player 2 ended with ${player2Won.length} rounds won. They tied ${tied.length} times.`)
    }else if(player1Won.length < player2Won.length){
      alert(`Player 2 is victorious! They won ${player2Won.length} rounds. Player 1 ended with ${player1Won.length} rounds won. They tied ${tied.length} times.` )
    }else(`There are no winners, game ended in a TIE!`)
  }

war()
whoIsWinner()


function add(num1, num2){
  return num1+num2
}

console.log(add(3,4))