//maybe change timeBetweenSteps up here
var CrazyDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="crazy-dancer dancer"><img class="resize" src="https://am21.akamaized.net/tms/cnt/uploads/2011/10/hammer-time.png"></span>');
  this.direction = Math.floor(Math.random() * (6));
  Dancer.call(this, top, left, timeBetweenSteps);

};

CrazyDancer.prototype = Object.create(Dancer.prototype);
CrazyDancer.prototype.constructor = CrazyDancer;

CrazyDancer.prototype.oldStep = CrazyDancer.prototype.step;

//there must be a better way to refactor step
CrazyDancer.prototype.step = function() {
  this.oldStep();
  var moveTop = parseInt(this.$node.css('top').slice(0, -2));
  var moveLeft = parseInt(this.$node.css('left').slice(0, -2));
  if (this.direction % 6 === 0) {
    moveTop += 30;
    moveTop = ' ' + moveTop + 'px';
    this.$node.css('top', moveTop);
    this.direction += 1;
  } else if (this.direction % 6 === 1) {
    moveTop -= 30;
    moveTop = ' ' + moveTop + 'px';
    this.$node.css('top', moveTop);
    this.direction += 1;
  } else if (this.direction % 6 === 2) {
    moveLeft += 30;
    moveLeft = ' ' + moveLeft + 'px';
    moveLeft = this.$node.css('left', moveLeft);
    this.direction += 1;
  } else if (this.direction % 6 === 3) {
    moveTop += 30;
    moveTop = ' ' + moveTop + 'px';
    this.$node.css('top', moveTop);
    this.direction += 1;
  } else if (this.direction % 6 === 4) {
    moveTop -= 30;
    moveTop = ' ' + moveTop + 'px';
    this.$node.css('top', moveTop);
    this.direction += 1;
  } else if (this.direction % 6 === 5) {
    moveLeft -= 30;
    moveLeft = ' ' + moveLeft + 'px';
    moveLeft = this.$node.css('left', moveLeft);
    this.direction += 1;
  }
};

CrazyDancer.prototype.lineUp = function() {
  var newTop = $('body').height() * 0.35;
  var newLeft = $('body').width() * (1 / 8);

  var crazyStyleSettings = {
    'top': newTop,
    'left': newLeft,
    'position': 'relative',
    'margin-right': '10px',
  };
  this.$node.css(crazyStyleSettings); //this code breaks a lot of CSS.  Why?
};
