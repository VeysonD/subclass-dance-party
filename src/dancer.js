// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  //very important to declare variables before calling functions
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;


  this.step();
  this.setPosition(this.top, this.left);
};

Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

//adding a Global lineup function here
/*
Dancer.prototype.lineUp = function() {
  var styleSettings = {
    top: 500,
    left: 500
  }
  //this.$node.css
}
*/
