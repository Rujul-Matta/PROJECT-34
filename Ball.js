class Ball {
  constructor(x,y){
    var options = {
      // isStatic : true,
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
  }
  this.r = 25;
  this.body = Bodies.circle(x, y,this.r, options);
  World.add(world, this.body);
  }

  display() {
    push();
    translate(this.body.position.x, this.body.position.y);
    ellipseMode(RADIUS);
    ellipse(0,0,this.r);
    pop();

  }
}
