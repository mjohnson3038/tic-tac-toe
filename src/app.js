import ApplicationView from 'app/views/application';
import Game from 'app/models/game';
import BoardView from 'app/views/board_view';

var game = new Game();
// game.fetch();

var appView = new ApplicationView({
  el: 'main',
  model: game
});


// appView.render();
