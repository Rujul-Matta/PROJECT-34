const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world = World;
var bodies = Bodies;

var ball_1, ball_2, ball_3, ball_4, ball_5;
var block;

var rope_1, rope_2, rope_3, rope_4, rope_5;
var image;
function preload(){
	image = loadImage("background.jpg")
}
function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	ball_1 = new Ball(300,375);
	ball_2 = new Ball(350,375);
	ball_3 = new Ball(400,375);
	ball_4 = new Ball(450,375);
	ball_5 = new Ball(500,375);

	block = new Ground(400,100);

	rope_1 = new Chain(ball_1.body,block.body,-100,10);
	rope_2 = new Chain(ball_2.body,block.body,-45,10);
	rope_3 = new Chain(ball_3.body,block.body,5,10);
	rope_4 = new Chain(ball_4.body,block.body,55,10);
	rope_5 = new Chain(ball_5.body,block.body,105,10);

	Engine.run(engine);
  
}


function draw() {
	background(image)
	Engine.update(engine)
  	rectMode(CENTER);
  

  ball_1.display();
  ball_2.display();
  ball_3.display();
  ball_4.display();
  ball_5.display();
 
//   block.display();
  
  rope_1.display();
  rope_2.display();
  rope_3.display();
  rope_4.display();
  rope_5.display();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball_1.body, ball_1.body.position,{x: -50 , y: -45});
	}
}

function mouseDragged(){
	Matter.Body.applyForce(ball_1.body, ball_1.body.position,{x: -5 , y: -5})
	Matter.Body.setPosition(ball_1.body, {x: mouseX , y: mouseY})
}

