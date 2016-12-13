import Game from 'game';

describe("Game", function(){
  it("instantiates two new player instances", function(){
    var game = new Game();
    expect(game.players).toBeDefined();
  });
});
