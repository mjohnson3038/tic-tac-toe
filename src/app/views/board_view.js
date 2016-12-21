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
    // console.log(e.currentTarget.id);
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
    this.$("#" + e.currentTarget.id).html(mark);
    this.trigger("play", e.currentTarget.id);
  },

  render: function() {
    // console.log("You are rendering the board view");
    return this;
  }
});

export default BoardView;
