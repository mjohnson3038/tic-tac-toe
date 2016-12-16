import Backbone from 'backbone';

var BoardView = Backbone.View.extend({
  initialize: function(){
    this.render();
  },

  events: {
    'click #new-game': 'startNewGame'
  },

  startNewGame: function(e){
    // clears board and initiates new game
  },

  render: function() {
    return this;
  }
});

export default BoardView;
