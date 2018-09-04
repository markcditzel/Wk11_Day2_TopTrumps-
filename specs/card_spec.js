const assert = require('assert');
const Card = require('../Card');

describe("card", function(){
  let card;

  this.beforeEach(function(){
    card = new Card("Batman", 10, 5, 6);
  });

  it('should have a name', function(){
    const actual = card.name;
    const expected = 'Batman';
    assert.strictEqual(actual,expected);
  });

  it('can check strength', function(){
    const actual = card.showStrength();
    const expected = 5;
    assert.strictEqual(actual,expected);
  });


  it('can check inteligence', function(){
    const  actual = card.showInteligence();
    const expected = 10;
    assert.strictEqual(actual,expected);
  });

  it('can check agility', function(){
    const  actual = card.showAgility();
    const expected = 6;
    assert.strictEqual(actual,expected);
  })





});
