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
});
