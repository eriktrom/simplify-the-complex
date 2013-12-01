define([
  'view',
  'collections/todos',
  'hbs!templates/todo-list/index'
], function (View, Todos, template) {

  var events = {
    "submit form": function(event) {
      event.preventDefault();
      var attrs = this.serialize();
      this.collection.add(attrs);
      this.$('input[name="title"]').val('');
    },
    'change input[type="checkbox"]': function(event) {
      var model = $(event.target).model();
      model.set({done: event.target.checked});
    }
  };

  return View.extend({
    name: 'todo-list/index',
    template: template,
    collection: new Todos([{
      title: 'First Todo',
      done: true
    }]),
    events: events
  });
});
