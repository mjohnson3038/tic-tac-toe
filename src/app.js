import ApplicationView from 'app/views/application';
import Application from 'app/models/application';
import BoardView from 'app/views/board_view';

var game = new Game();

var appView = new ApplicationView({
  el: 'main',
  model: game
});

// appView.render();
