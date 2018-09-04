const assert = require('assert');
const Player = require('../player');
const Card = require('../card');

describe('Player', function(){

  let player;

  this.beforeEach(function(){
      card = new Card("Batman", 10, 5, 6);
      player = new Player("Mark");
  });

  it("should have a name", function(){
    const actual = player.name;
    const expected = "Mark";
    assert.strictEqual(actual, expected);
  });

  it('should start empty hand', function(){
    const actual = player.countCards();
    const expected = 0;
    assert.strictEqual(actual, expected);
  })

  it('should be able to add card', function(){
    player.addCardToEnd(card);
    const actual = player.countCards();
    const expected = 1;
    assert.strictEqual(actual, expected);
  })

  it('should be able to remove card', function(){
    player.addCardToEnd(card);
    player.removeStartCard();
    const actual = player.countCards();
    const expected = 0;
    assert.strictEqual(actual, expected);
  })

  it('should be able to look at first(top) card', function(){
    player.addCardToEnd(card);
    const actual = player.lookAtTopCard().name;
    const expected = "Batman";
    assert.strictEqual(actual, expected);
  })

  it('should be able choose higher category', function(){
    player.addCardToEnd(card);
    const actual = player.chooseCategory();
    const expected = "inteligence";
    assert.strictEqual(actual, expected);
  })
});
