require([
  'jquery',
  'backbone',
  'views/root',
  'helpers',
], function ($, Backbone, rootView, TodoListRouter) {

  $(function() {
    Backbone.history.start({
      pushState: false,
      root: '/',
      silent: true
    });

    rootView.appendTo(document.body);

    require(['routers/todo-list'], function () {
      Backbone.history.loadUrl();
    });
  });

});
