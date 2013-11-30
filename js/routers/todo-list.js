define([
  'backbone',
  'views/root',
  'views/todo-list/index'
], function (Backbone, RootView, todoListIndexView) {
  return new Backbone.Router({
    routes: {
      "": function () {
        RootView.setView(todoListIndexView);
      }
    }
  });
});
