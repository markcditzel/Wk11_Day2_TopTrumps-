const Game = function(player1, player2){
  this.player1 = player1;
  this.player2 = player2;
}

Game.prototype.playerCount = function(){
  let players = [];
  players.unshift(this.player1, this.player2);
  return players.length;
}

module.exports = Game;
