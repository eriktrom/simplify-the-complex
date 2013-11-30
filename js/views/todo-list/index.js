define([
  'view',
  'collection',
  'hbs!templates/todo-list/index'
], function (View, Collection, template) {

  var collection = new Collection([{
    title: 'First Todo',
    done: true
  }]);

  return new View({
    name: 'todo-list/index',
    template: template,
    collection: collection
  });
});
