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
  // FOR THE HORIZONTAL WIN - STILL TO DETERMINE IF WE CNA PUT THIS IN A LOOP VS HARD CODING.
  for(var i = 0; i < this.board.grid.length; i++){
    if (this.board.grid[i][0] == this.board.grid[i][1] && this.board.grid[i][0] == this.board.grid[i][2]){
      if (this.board.grid[i][0] == this.playerOne.mark){
        return "Player One";
      } else if (this.board.grid[i][0] == this.playerTwo.mark){
        return "Player Two";
      }
    }
  }
  // VERTICAL WIN
  for(var k = 0; k < this.board.grid[0].length; k++) {
    if (this.board.grid[0][k] == this.board.grid[1][k] && this.board.grid[0][k] == this.board.grid[2][k]){
      if (this.board.grid[0][k] == this.playerOne.mark){
        return "Player One";
      } else if (this.board.grid[0][k] == this.playerTwo.mark){
        return "Player Two";
      }
    }
  }

  // DIAGONAL WINS
  if (this.board.grid[0][0] == this.board.grid[1][1] && this.board.grid[0][0] == this.board.grid[2][2]){
    if (this.board.grid[0][0] == this.playerOne.mark){
      return "Player One";
    } else if (this.board.grid[0][0] == this.playerTwo.mark){
      return "Player Two";
    }
  }
  if (this.board.grid[0][2] == this.board.grid[1][1] && this.board.grid[0][2] == this.board.grid[2][0]){
    if (this.board.grid[0][2] == this.playerOne.mark){
      return "Player One";
    } else if (this.board.grid[0][2] == this.playerTwo.mark){
      return "Player Two";
    }
  }

  return null;
};

export default Game;
