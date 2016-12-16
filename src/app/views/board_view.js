import Backbone from 'backbone';

var BoardView = Backbone.View.extend({
  initialize: function(){
    this.render();
  },

  render: function() {
    return this;
  }
});

export default BoardView;
