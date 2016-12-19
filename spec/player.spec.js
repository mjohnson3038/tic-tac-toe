import Player from 'app/models/player';

describe("Player", function() {
  var noelle = new Player();
  it("must be able to create a new instance of player", function(){
    // To be determined: test Type of / object defined
    expect(noelle).not.toBe(null);
    expect(noelle).toBeTruthy();

  });

  it("should have a turn variable defaulted to false", function(){
    expect(noelle.get('turn')).toBeDefined();
    expect(noelle.get('turn')).toBe(false);
  });

  it("should have a mark variable", function() {
    expect(noelle.get('mark')).toBeDefined();
    expect(noelle.get('mark')).toBe(null);
  });
});
