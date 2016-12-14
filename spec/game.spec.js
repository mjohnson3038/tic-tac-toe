import Game from 'game';
import Board from 'board';

describe("Game", function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

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
    it("should swap the boolean values of players' turns", function(){
      game.toggleTurn();
      expect(game.playerOne.turn).toEqual(false);
      expect(game.playerTwo.turn).toEqual(true);
    });

    it("should swap the boolean values of players' turns again", function(){
      game.toggleTurn();
      game.toggleTurn();
      expect(game.playerOne.turn).toEqual(true);
      expect(game.playerTwo.turn).toEqual(false);
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
    it("should return the proper winner for horizontal win", function(){
      game.board.grid[0] = ["X","X","X"];
      expect(game.winner()).toEqual("Player One");
    });
    it("should return the proper winner for horizontal win", function(){
      game.board.grid[1] = ["X","X","X"];
      expect(game.winner()).toEqual("Player One");
    });
    it("should return the proper winner for horizontal win", function(){
      game.board.grid[2] = ["X","X","X"];
      expect(game.winner()).toEqual("Player One");
    });
    it("should return the proper winner for horizontal win", function(){
      game.board.grid[1] = ["O","O","O"];
      expect(game.winner()).toEqual("Player Two");
    });
    it("should return null for no winner", function(){
      // console.log(">>>>>>>>>>>>>" + game.board.grid);
      expect(game.winner()).toEqual(null);
    });

    it("should return the proper winner for a vertical win", function(){
      game.board.grid[0][0] = "O";
      game.board.grid[1][0] = "O";
      game.board.grid[2][0] = "O";
      // console.log(">>>>>>>>>>>>>" + game.board.grid);
      expect(game.winner()).toEqual("Player Two");
    });

    it("should return the proper winner for a vertical win", function(){
      game.board.grid[0][1] = "O";
      game.board.grid[1][1] = "O";
      game.board.grid[2][1] = "O";
      // console.log(">>>>>>>>>>>>>" + game.board.grid);
      expect(game.winner()).toEqual("Player Two");
    });

    it("should return the proper winner for a vertical win", function(){
      game.board.grid[0][2] = "O";
      game.board.grid[1][2] = "O";
      game.board.grid[2][2] = "O";
      // console.log(">>>>>>>>>>>>>" + game.board.grid);
      expect(game.winner()).toEqual("Player Two");
    });

    it("should return the proper winner for a vertical win", function(){
      game.board.grid[0][0] = "X";
      game.board.grid[1][0] = "X";
      game.board.grid[2][0] = "X";
      // console.log(">>>>>>>>>>>>>" + game.board.grid);
      expect(game.winner()).toEqual("Player One");
    });

    it("should return the proper winner for a left diagonal win", function(){
      game.board.grid[0][0] = "X";
      game.board.grid[1][1] = "X";
      game.board.grid[2][2] = "X";
      expect(game.winner()).toEqual("Player One");
    });

    it("should return the proper winner for a right diagonal win", function(){
      game.board.grid[0][2] = "O";
      game.board.grid[1][1] = "O";
      game.board.grid[2][0] = "O";
      expect(game.winner()).toEqual("Player Two");
    });

    it("should return null if the entire game ends in a draw", function(){
      game.board.grid[0] = ["X", "O", "X"];
      game.board.grid[1] = ["O", "X", "O"];
      game.board.grid[2] = ["O", "X", "O"];
      expect(game.winner()).toEqual(null);
    });
  });

  describe("play(a,b)", function(){
    it("the play should not go through if the game has already been won", function(){
      game.board.grid[0] = ["X","X","X"];
      expect(game.play(1,1)).toEqual("Sorry the game has already been won.");
    });

    it("the play should not go through if the square isn't valid", function(){
      game.board.grid[1] = ["X","X","O"];
      expect(game.play(1,1)).toEqual("Sorry, the square is already played, please pick another one");
    });

    it("should play a square if it is valid and game hasn't been won yet", function(){
      game.play(1,1);
      expect(game.board.grid[1][1]).toEqual(game.playerOne.mark);
    });

    it("should toggle the turns once a valid play is completed", function(){
      expect(game.playerOne.turn).toEqual(true);
      game.play(1,1);
      expect(game.board.grid[1][1]).toEqual(game.playerOne.mark);
      expect(game.playerOne.turn).toEqual(false);
      expect(game.playerTwo.turn).toEqual(true);
    });

    it("should announce when a player has won", function(){
      game.play(0,0);
      game.play(0,2);
      game.play(1,1);
      game.play(1,2);
      expect(game.play(2,2)).toEqual("Congratulations, " + game.winner() + " has won!");
    });
  });
});
