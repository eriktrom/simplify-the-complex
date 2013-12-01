require([
  'jquery',
  'backbone',
  'views/root',
  'helpers',
], function ($, Backbone, rootView) {

  $(function() {
    Backbone.history.start({
      pushState: false,
      root: '/',
      silent: true
    });

    rootView.appendTo(document.body);

    require(['routers/todo-list'], function (TodoListRouter) {
      TodoListRouter();
      Backbone.history.loadUrl(); // if this is async, we're in trouble, need to look that
    });

  });

});
