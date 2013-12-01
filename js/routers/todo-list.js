define([
  'backbone',
  'views/root',
  'views/todo-list/index'
], function (Backbone, RootView, TodoListIndexView) {

  var Router = Backbone.Router.extend({
    routes: {
      "": function () {
        RootView.setView(new TodoListIndexView());
      }
    }
  });

  return function (options) {
    return new Router(options);
  };

  // TODO: try returning a promise, also,
});
