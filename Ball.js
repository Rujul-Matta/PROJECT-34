class Ball {
  constructor(x,y){
    var options = {
      // isStatic : true,
      'restitution':1.2,
      'friction':1.0,
      'density':0.9
  }
  this.r = 25;
  this.body = Bodies.circle(x, y,this.r, options);
  World.add(world, this.body);
  }

  display() {
    push();
    translate(this.body.position.x, this.body.position.y);
    fill("lightgreen")
    ellipseMode(RADIUS);
    ellipse(0,0,this.r);
    pop();

  }
}
