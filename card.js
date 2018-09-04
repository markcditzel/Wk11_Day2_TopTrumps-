const Card = function(name, inteligence, strength, agility){
  this.name = name;
  this.inteligence = inteligence;
  this.strength = strength;
  this.agility = agility;
};

module.exports = Card;


Card.prototype.showInteligence = function(){
  return this.inteligence;
}

Card.prototype.showStrength = function(){
  return this.strength;
}

Card.prototype.showAgility= function(){
  return this.agility;
}
