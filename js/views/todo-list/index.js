define([
  'view',
  'collections/todos',
  'hbs!templates/todo-list/index'
], function (View, todos, template) {
  return new View({
    name: 'todo-list/index',
    template: template,
    collection: todos
  });
});
