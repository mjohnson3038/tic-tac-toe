import Player from 'player';

describe("Player", function() {
  var noelle = new Player();
  it("must be able to create a new instance of player", function(){
    // To be determined: test Type of / object defined
    expect(noelle).not.toBe(null);
    expect(noelle).toBeTruthy();

  });

  it("should have a turn variable defaulted to false", function(){
    expect(noelle.turn).toBeDefined();
    expect(noelle.turn).toBe(false);
  });

  it("should have a mark variable", function() {
    expect(noelle.mark).toBeDefined();
    expect(noelle.mark).toBe(null);
  });
});
