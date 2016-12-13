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

export default Game;
