define([
  'layout-view',
  'hbs!templates/root'
], function(LayoutView, rootTemplate) {
  return new LayoutView({
    name: 'root',
    template: rootTemplate
  });
});