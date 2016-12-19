import ApplicationView from 'app/views/application';
import Application from 'app/models/application';
import BoardView from 'app/views/board_view';

var application = new Application();

var appView = new ApplicationView({
  el: '#main',
  model: application
});

appView.render();
