describe('crazyDancer', function() {
  var crazyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    crazyDancer = new CrazyDancer(5, 80, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(crazyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a line up function that lines up all crazy dancers', function() {
    sinon.spy(crazyDancer, 'lineUp');
    crazyDancer.lineUp();
    expect(crazyDancer.lineUp.callCount).to.be.equal(1);
  });
});
