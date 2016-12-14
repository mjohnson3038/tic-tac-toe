import Game from 'game';
import Board from 'board';

describe("Game", function(){
  var game = new Game();

  it("instantiates two new player instances", function(){
    expect(game.playerOne).toBeDefined();
    expect(game.playerTwo).toBeDefined();
  });

  it("should set Player One's mark to be X", function() {
    expect(game.playerOne.mark).toEqual("X");
  });

  it("should set Player Two's mark to be O", function() {
    expect(game.playerTwo.mark).toEqual("O");
  });

  it("should initialize Player One's turn to true", function() {
    expect(game.playerOne.turn).toEqual(true);
  });

  it("should initialize Player Two's turn to false", function(){
    expect(game.playerTwo.turn).toEqual(false);
  });

  it("instantiates a new instance of the Board", function() {
    expect(game.board).toBeDefined();
  });

  describe("toggleTurn", function() {
    var gameTwo = new Game();
    gameTwo.toggleTurn();
    it("should swap the boolean values of players' turns", function(){
      expect(gameTwo.playerOne.turn).toEqual(false);
      expect(gameTwo.playerTwo.turn).toEqual(true);
    });

    it("should swap the boolean values of players' turns again", function(){
      gameTwo.toggleTurn();
      expect(gameTwo.playerOne.turn).toEqual(true);
      expect(gameTwo.playerTwo.turn).toEqual(false);
    });
  });

  describe("validSquare", function(){
    it("should return true if the square is null", function(){
      expect(game.validSquare(2,1)).toEqual(true);
    });

    it("should return false if the square is an X or O", function(){
      game.board.grid[0][1] = "X";
      expect(game.validSquare(0,1)).toEqual(false);
    });
  });

  describe("winner", function(){
    var gameWinner = new Game();

    beforeEach(function(){
      gameWinner.board.grid = [[null,null,null],[null,null,null],[null,null,null]];
    });

    it("should return the proper winner for horizontal win", function(){
      gameWinner.board.grid[0] = ["X","X","X"];
      expect(gameWinner.winner()).toEqual("Player One");
    });
    it("should return the proper winner for horizontal win", function(){
      gameWinner.board.grid[1] = ["X","X","X"];
      expect(gameWinner.winner()).toEqual("Player One");
    });
    it("should return the proper winner for horizontal win", function(){
      gameWinner.board.grid[2] = ["X","X","X"];
      expect(gameWinner.winner()).toEqual("Player One");
    });
    it("should return the proper winner for horizontal win", function(){
      gameWinner.board.grid[1] = ["O","O","O"];
      expect(gameWinner.winner()).toEqual("Player Two");
    });
    it("should return null for no winner", function(){
      // console.log(">>>>>>>>>>>>>" + gameWinner.board.grid);
      expect(gameWinner.winner()).toEqual(null);
    });

    it("should return the proper winner for a vertical win", function(){
      gameWinner.board.grid[0][0] = "O";
      gameWinner.board.grid[1][0] = "O";
      gameWinner.board.grid[2][0] = "O";
      // console.log(">>>>>>>>>>>>>" + gameWinner.board.grid);
      expect(gameWinner.winner()).toEqual("Player Two");
    });

    it("should return the proper winner for a vertical win", function(){
      gameWinner.board.grid[0][1] = "O";
      gameWinner.board.grid[1][1] = "O";
      gameWinner.board.grid[2][1] = "O";
      // console.log(">>>>>>>>>>>>>" + gameWinner.board.grid);
      expect(gameWinner.winner()).toEqual("Player Two");
    });


    it("should return the proper winner for a vertical win", function(){
      gameWinner.board.grid[0][2] = "O";
      gameWinner.board.grid[1][2] = "O";
      gameWinner.board.grid[2][2] = "O";
      // console.log(">>>>>>>>>>>>>" + gameWinner.board.grid);
      expect(gameWinner.winner()).toEqual("Player Two");
    });

    it("should return the proper winner for a vertical win", function(){
      gameWinner.board.grid[0][0] = "X";
      gameWinner.board.grid[1][0] = "X";
      gameWinner.board.grid[2][0] = "X";
      // console.log(">>>>>>>>>>>>>" + gameWinner.board.grid);
      expect(gameWinner.winner()).toEqual("Player One");
    });

    it("should return the proper winner for a left diagonal win", function(){
      gameWinner.board.grid[0][0] = "X";
      gameWinner.board.grid[1][1] = "X";
      gameWinner.board.grid[2][2] = "X";
      expect(gameWinner.winner()).toEqual("Player One");
    });

    it("should return the proper winner for a right diagonal win", function(){
      gameWinner.board.grid[0][2] = "O";
      gameWinner.board.grid[1][1] = "O";
      gameWinner.board.grid[2][0] = "O";
      expect(gameWinner.winner()).toEqual("Player Two");
    });

    it("should return null if the entire game ends in a draw", function(){
      gameWinner.board.grid[0] = ["X", "O", "X"];
      gameWinner.board.grid[1] = ["O", "X", "O"];
      gameWinner.board.grid[2] = ["O", "X", "O"];
      expect(gameWinner.winner()).toEqual(null);
    });
  });

  describe("play", function(){
    var gamePlay = new Game();

    beforeEach(function(){
      gamePlay.board.grid = [[null,null,null],[null,null,null],[null,null,null]];
      gamePlay.playerOne.turn = true;
      gamePlay.playerTwo.turn = false;
    });

    it("the play should not go through if the game has already been won", function(){
      gamePlay.board.grid[0] = ["X","X","X"];
      expect(gamePlay.play(1,1)).toEqual("Sorry the game has already been won.");
    });

    it("the play should not go through if the square isn't valid", function(){
      gamePlay.board.grid[1] = ["X","X","O"];
      expect(gamePlay.play(1,1)).toEqual("Sorry, the square is already played, please pick another one");
    });

    it("should play a square if it is valid and game hasn't been won yet", function(){
      gamePlay.play(1,1);
      expect(gamePlay.board.grid[1][1]).toEqual(gamePlay.playerOne.mark);
    });

    it("should toggle the turns once a valid play is completed", function(){
      expect(gamePlay.playerOne.turn).toEqual(true);
      gamePlay.play(1,1);
      expect(gamePlay.board.grid[1][1]).toEqual(gamePlay.playerOne.mark);
      expect(gamePlay.playerOne.turn).toEqual(false);
      expect(gamePlay.playerTwo.turn).toEqual(true);
    });

    it("should announce when a player has won", function(){
      gamePlay.play(0,0);
      gamePlay.play(0,2);
      gamePlay.play(1,1);
      gamePlay.play(1,2);
//      gamePlay.play(2,2);
      expect(gamePlay.play(2,2)).toEqual("Congratulations, " + gamePlay.winner() + " has won!");
    });

    it("should throw an error when a player plays a play out of range (0-2)", function(){
      expect(function(){gamePlay.play(2,3);}).toThrowError("This is not a valid square");
    });

    it("should throw an error when a player references a square with anything other then typeof number", function(){
      expect(function(){gamePlay.play(2,"purple");}).toThrowError("coordinates must be numbers between 0-2");
      expect(function(){gamePlay.play(true,0);}).toThrowError("coordinates must be numbers between 0-2");
      expect(function(){gamePlay.play([1,2],);}).toThrowError("coordinates must be numbers between 0-2");
    });
  });
});
