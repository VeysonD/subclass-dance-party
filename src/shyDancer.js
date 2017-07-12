
var ShyDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="shy-dancer dancer"></span>');
  this.direction = Math.floor(Math.random() * (2));
  Dancer.call(this, top, left, timeBetweenSteps);
};

ShyDancer.prototype = Object.create(Dancer.prototype);
ShyDancer.prototype.constructor = ShyDancer;

ShyDancer.prototype.oldStep = ShyDancer.prototype.step;

ShyDancer.prototype.step = function() {
  this.oldStep();
  var moveTop = parseInt(this.$node.css('top').slice(0, -2));
  var moveLeft = parseInt(this.$node.css('left').slice(0, -2));
  if (this.direction % 2 === 0) {
    moveTop += 10;
    moveTop = ' ' + moveTop + 'px';
    this.$node.css('top', moveTop);
    this.direction += 1;
  } else if (this.direction % 2 === 1) {
    moveTop -= 10;
    moveTop = ' ' + moveTop + 'px';
    this.$node.css('top', moveTop);
    this.direction += 1;
  }
};
ShyDancer.prototype.lineUp = function() {
  var shyLeft = $('body').width() * 0.05;

  var shyStyleSettings = {
    'left': shyLeft,
    'margin-right': '50px',
  };
  this.$node.css(shyStyleSettings);
};
