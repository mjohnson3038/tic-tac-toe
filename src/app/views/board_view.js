import Backbone from 'backbone';
import $ from 'jquery';

var BoardView = Backbone.View.extend({
  initialize: function(options){
    this.player = options.gameModel.currentPlayer();
    this.render();
  },


  events: {
    'click .square': 'playSquare'
  },

  playSquare: function(e){
    // To click and play a square in a game of TTT. Need to find a way to pass in the id of the click element.
    console.log("You've clicked the board");
    console.log(e.currentTarget.id);
    // var squareId = e.currentTarget.id;
    console.log(this.player);
    console.log(this.player.get("mark"));
    this.$("#" + e.currentTarget.id).html("YES!");
    this.trigger("play", e.currentTarget.id);

  },

  render: function() {
    console.log("You are rendering the board view");
    return this;
  }
});

export default BoardView;
