import ApplicationView from 'app/views/application';

var application = new Application();

var appView = new ApplicationView({
  el: '#main',
  model: application
});
