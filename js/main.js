require([
  'jquery',
  'backbone',
  'views/root',
  'routers/todo-list',
  'helpers',
], function ($, Backbone, rootView, TodoListRouter) {

  initialize(function(next) {
    // Load any data that your app requires to boot
    // and initialize all routers here, the callback
    // `next` is provided in case the operations
    // needed are aysynchronous
    new TodoListRouter();

    next();
  });

  function initialize(complete) {
    $(function() {
      Backbone.history.start({
        pushState: false,
        root: '/',
        silent: true
      });

      rootView.appendTo(document.body);

      complete(function() {
        Backbone.history.loadUrl();
      });
    });
  }

});
