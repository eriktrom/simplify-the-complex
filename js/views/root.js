define([
  'layout-view',
  'hbs!templates/root'
], function(LayoutView, rootTemplate) {
  var RootView = LayoutView.extend({
    name: 'root',
    template: rootTemplate
  });

  return new RootView();
});