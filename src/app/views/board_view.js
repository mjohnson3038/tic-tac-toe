import Backbone from 'backbone';

var BoardView = Backbone.View.extend({
  initialize: function(){
    this.render();
  },

  events: {
    'click .square': 'playSquare'
  },

  playSquare: function(e){
    // To click and play a square in a game of TTT. Need to find a way to pass in the id of the click element.
  },

  render: function() {
    return this;
  }
});

export default BoardView;
