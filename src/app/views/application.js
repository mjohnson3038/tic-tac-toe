import Backbone from 'backbone';
import BoardView from 'app/views/board_view';

var ApplicationView = Backbone.View.extend({
  initialize: function(){
    this.render();
  },

  events: {
    'click #new-game': 'startNewGame'

  },

  startNewGame: function(e){
    // clears board and initiates new game
    console.log("You've started a new game");
  },

  render: function() {
    var board = new BoardView( {
      el: '#board'
    });
    console.log("You are rendering the board here??????");
    return this;
  }
});

export default ApplicationView;
