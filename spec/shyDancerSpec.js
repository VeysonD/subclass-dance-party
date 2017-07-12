describe('shyDancer', function() {
  var shyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    shyDancer = new ShyDancer(50, 90, timeBetweenSteps);
  });

  it('should have an instane of a jQuery object', function() {
    expect(shyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a line up function that lines up all shy dancers', function() {
    sinon.spy(shyDancer, 'lineUp');
    shyDancer.lineUp();
    expect(shyDancer.lineUp.callCount).to.be.equal(1);
  });
});
