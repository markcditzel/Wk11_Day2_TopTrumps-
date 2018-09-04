const assert = require('assert');
const Player = require('../player');
const Card = require('../card');
const Game = require('../game');

describe('Game', function(){
  let player1;
  let player2;
  let card1;
  let card2;
  let game;

  this.beforeEach(function(){
    card1 = new Card("Batman", 10, 5, 6);
    card2 = new Card("WonderWoman", 8, 7, 5);
    player1 = new Player("Mark");
    player2 = new Player("Marcin");
    game = new Game(player1, player2);
  });

  it('should have two players', function(){
    const actual = game.playerCount();
    const expected = 2;
    assert.strictEqual(actual, expected);

  });
});
// should have 2 players
// deal cards to players
// player decides on category
