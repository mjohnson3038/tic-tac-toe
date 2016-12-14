import Board from "board";
import Player from "player";

var Game = function() {
  // TODO: Test if playerOne, playerTwo are instances of Player
  // Test if board is instance of Board
  // these are tested indirectly
  this.playerOne = new Player();
  this.playerTwo = new Player();
  this.board = new Board();

  this.playerOne.mark = "X";
  this.playerTwo.mark = "O";
  this.playerOne.turn = true;
};

Game.prototype.toggleTurn = function() {
  // TODO: find toggle method -- dealing with booleans
  this.playerTwo.turn = [this.playerOne.turn,
    this.playerOne.turn = this.playerTwo.turn][0];
};

Game.prototype.validSquare = function(a, b) {
  if(this.board.grid[a][b] === null) {
    return true;
  } else {
    return false;
  }
};

Game.prototype.winner = function(){
  for(var i = 0; i < this.board.grid.length; i++){
    for(var j = 1; j < this.board.grid[i].length; j ++){
      if (this.board.grid[i][0] != this.board.grid[i][j]){
        break;
      }
    }
    if (this.board.grid[i][0] == this.playerOne.mark){
      return "Player One";
    } else if (this.board.grid[i][0] == this.playerTwo.mark) {
      return "Player Two";
    }
  }
  return null;
};

export default Game;
