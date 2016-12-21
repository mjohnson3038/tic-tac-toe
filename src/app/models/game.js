import Backbone from 'backbone';

import Board from 'app/models/board';
import Player from 'app/models/player';

const Game = Backbone.Model.extend({

  initialize: function(options) {
    // TODO: Test if playerOne, playerTwo are instances of Player
    // Test if board is instance of Board
    // these are tested indirectly
    this.playerOne = new Player();
    this.playerTwo = new Player();
    this.board = new Board();

    this.playerOne.set("mark", "X"),
    this.playerTwo.set("mark", "O"),
    this.playerOne.set("turn", true)
  },

  toggleTurn: function() {
    console.log("TOOOGLLEINNNGNNGN TUUURN");
    this.playerOne.set("turn", !(this.playerOne.get("turn")));
    this.playerTwo.set("turn", !(this.playerTwo.get("turn")));
  },

  validSquare: function(a, b) {
    if(this.board.grid[a][b] === null) {
      return true;
    } else {
      return false;
    }
  },

  currentPlayer: function(){
    console.log("CUUURENNNTNT PLAYER");
    if (this.playerOne.get("turn") === true){
      console.log("player: player one");
      return this.playerOne;
    } else if (this.playerTwo.get("turn") === true) {
      console.log("player: player two");
      return this.playerTwo;
    }
  },
  //
  playerByMark: function(mark){
  // A function to determine the player based on the mark

    // TODO: Having trouble getting the testing to work for this error
    if (mark !== "X" && mark !== "O" ){
      throw new Error("Function only accepts the marks of the players which are passed as strings");
    }

    if (mark == this.playerOne.get("mark")){
      return "Player One";
    } else if (mark == this.playerTwo.get("mark")){
      return "Player Two";
    }
  },

  winner: function(){
    // FOR THE HORIZONTAL WIN - STILL TO DETERMINE IF WE CNA PUT THIS IN A LOOP VS HARD CODING.

    for(var i = 0; i < this.board.grid.length; i++){
      if (this.board.grid[i][0] == this.board.grid[i][1] && this.board.grid[i][0] == this.board.grid[i][2] && this.board.grid[i][0] !== null){
        return this.playerByMark(this.board.grid[i][0]);
      }
    }
    // VERTICAL WIN
    for(var k = 0; k < this.board.grid[0].length; k++) {
      if (this.board.grid[0][k] == this.board.grid[1][k] && this.board.grid[0][k] == this.board.grid[2][k] && this.board.grid[0][k] !== null){
        return this.playerByMark(this.board.grid[0][k]);
      }
    }

    // DIAGONAL WINS
    if (this.board.grid[0][0] == this.board.grid[1][1] && this.board.grid[0][0] == this.board.grid[2][2] && this.board.grid[0][0] !== null){
      return this.playerByMark(this.board.grid[0][0]);
    }
    if (this.board.grid[0][2] == this.board.grid[1][1] && this.board.grid[0][2] == this.board.grid[2][0] && this.board.grid[0][2] !== null){
      return this.playerByMark(this.board.grid[0][2]);
    }
    return null;
  },

  play: function(a,b){
    console.log("play called with " + a + ", " + b);

    // Error Handling of input type. Technically could be in one if-statement, but separated out if clear what each is looking for.
    if (typeof a !== "number" || typeof b !== "number" ){
      throw new Error("Coordinates must be integer numbers between 0 and 2 inclusive");
    } else if (a < 0 || a > 2 || b < 0 || b > 2){
      throw new Error("Coordinates must be integer numbers between 0 and 2 inclusive");
    } else if (a % 1 !== 0 || b % 1 !== 0){
      throw new Error("Coordinates must be integer numbers between 0 and 2 inclusive");
    }

    if (this.winner()){
      return "Sorry the game has already been won.";
    } else if (this.validSquare(a,b) === false) {
      // console.log(">>>>>>>>>>> square: " + this.board.grid[a][b]);
      return "Sorry, the square is already played, please pick another one";
    } else if (this.winner() === null && this.validSquare(a,b)) {
      // Checking to see whose turn it is.

      // need to make a temporary board so I can change just one letter
      var tempBoard = this.board.grid;
      // console.log("this >>>>:" + this);

      // console.log("temporary board >>>>:" + tempBoard[a][b]);
      var mark = this.currentPlayer().get("mark");
      // console.log ("mark >>>>>>>>>>>:" + mark);

      tempBoard[a][b] = mark;

      this.board.grid = tempBoard;

      if(this.winner()) {
        return "Congratulations, " + this.winner() + " has won!";
      }
      this.toggleTurn();
      // return "Great Play!";
    }
  }
});

export default Game;
