
var BlinkyDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="blinky-dancer dancer"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Stick_Figure.svg/170px-Stick_Figure.svg.png"></span>');
  this.direction = Math.floor(Math.random() * (2));
  Dancer.call(this, top, left, timeBetweenSteps);

};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.oldStep = BlinkyDancer.prototype.step;

BlinkyDancer.prototype.step = function() {
  this.oldStep();
  var moveLeft = parseInt(this.$node.css('left').slice(0, -2));
  if (this.direction % 2 === 0) {
    moveLeft += 10;
    moveLeft = ' ' + moveLeft + 'px';
    moveLeft = this.$node.css('left', moveLeft);
    this.direction += 1;
  } else if (this.direction % 2 === 1) {
    moveLeft -= 10;
    moveLeft = " " + moveLeft + 'px';
    moveLeft = this.$node.css("left", moveLeft);
    this.direction += 1;
  }
};
BlinkyDancer.prototype.lineUp = function() {
  var blinkyTop = $('body').height() * 0.90;
  var blinkyLeft = $('body').width() * (3/8);
  var blinkyStyleSettings = {
    'top': blinkyTop,
    'left': blinkyLeft,
    'position': 'relative',
    'margin-right': '10px',
  };
  this.$node.css(blinkyStyleSettings);
};
