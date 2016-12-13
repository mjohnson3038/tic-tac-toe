import Player from 'player';

describe("Player", function() {
  it("must be able to create a new instance of player", function(){
    var noelle = new Player();
    expect(noelle).not.toBe(null);
  });
});
