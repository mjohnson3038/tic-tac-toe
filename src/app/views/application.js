import Backbone from 'backbone';
import BoardView from 'app/views/board-view.js';

var ApplicationView = Backbone.View.extend({
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

export default ApplicationView;
