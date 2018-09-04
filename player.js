const Player = function(name){
  this.name = name;
  this.hand = [];
}

module.exports = Player;

Player.prototype.countCards = function(){
  return this.hand.length;
}

Player.prototype.addCardToEnd = function(card){
  this.hand.push(card);
}

Player.prototype.removeStartCard = function(card){
  this.hand.shift()
}

Player.prototype.lookAtTopCard = function(){
  return this.hand[0];
}

Player.prototype.chooseCategory = function(){
  // check card
  let card = this.lookAtTopCard();

  let winningCategory = "agility";
    if (card.inteligence >  card.agility){
      winningCategory = "inteligence"
    } else if (card.strength > card.inteligence){
      winningCategory = "strength"
    }
    return winningCategory;

  // check which category value is highest
  // choose this category
}
