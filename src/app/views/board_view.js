import Backbone from 'backbone';
import $ from 'jquery';

var BoardView = Backbone.View.extend({
  initialize: function(options){
    this.gameModel = options.gameModel;
    this.player = options.gameModel.currentPlayer();
    this.render();
  },


  events: {
    'click .square': 'playSquare'
  },

  playSquare: function(e){
    // To click and play a square in a game of TTT. Need to find a way to pass in the id of the click element.
    // console.log("You've clicked the board");
    // // var squareId = e.currentTarget.id;
    // console.log(this.player);
    console.log("playerOne turn" + this.gameModel.playerOne.get("turn"));
    console.log("playerTwo turn" + this.gameModel.playerTwo.get("turn"));

    var mark;
    if (this.gameModel.playerOne.get("turn")){
      mark = "X";
    } else {
      mark = "O";
    }
    // console.log(">>>>>>>>mark" + mark);
    // this.trigger("play", e.currentTarget.id);

    var sqId = e.currentTarget.id;

    var a;
    var b;
    if (sqId == "sq-1"){
      a = 0;
      b = 0;
    } else if (sqId == "sq-2") {
      a = 0;
      b = 1;
    } else if (sqId == "sq-3") {
      a = 0;
      b = 2;
    } else if (sqId == "sq-4") {
      a = 1;
      b = 0;
    } else if (sqId == "sq-5") {
      a = 1;
      b = 1;
    } else if (sqId == "sq-6") {
      a = 1;
      b = 2;
    } else if (sqId == "sq-7") {
      a = 2;
      b = 0;
    } else if (sqId == "sq-8") {
      a = 2;
      b = 1;
    } else if (sqId == "sq-9") {
      a = 2;
      b = 2;
    }
    // console.log(">>>>>>>>>>>>" + a);
    // console.log(b);
    if (this.gameModel.validSquare(a,b) && this.gameModel.winner() === null){
      console.log("this is a valid square");
      this.gameModel.play(a,b);
      this.$("#" + e.currentTarget.id).html(mark);
      this.trigger("changedPlayer", mark);
      console.log("game winner>>>>" + this.gameModel.winner());
    } else {
      console.log("this is not a valid square");
    }

    if (this.gameModel.winner() !== null){
      this.trigger("thereIsAWinner", mark);
      console.log("trigger went off");
    }

    console.log(this.gameModel.board.grid[0]);
    console.log(this.gameModel.board.grid[1]);
    console.log(this.gameModel.board.grid[2]);


  },

  render: function() {
    // console.log("You are rendering the board view");
    return this;
  }
});

export default BoardView;
