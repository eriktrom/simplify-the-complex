define([
  'backbone',
  'views/root',
  'views/todo-list/index'
], function (Backbone, RootView, todoListIndexView) {
  return Backbone.Router.extend({
    routes: {
      "": function () {
        RootView.setView(todoListIndexView);
      }
    }
  });
});
