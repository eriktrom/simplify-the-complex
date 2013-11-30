define(['views/root'], function(rootView) {
  describe('Root View', function() {

    after(function() {
      rootView.remove();
    });

    it('Should render properly', function() {
      expect(rootView.render()).to.contain('data-layout-cid');
    });

  });
});