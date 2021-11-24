const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paperObject
var world;
var sunPosition = 50;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);
	paper = new paper(15,20,20);
  
}

function draw() {
  rectMode(CENTER);
  background(230);
  
  fill("yellow");
  ellipse(350,sunPosition,50,50);
 
  groundObject.display();
  dustbinObj.display();
  paper.display();

  function keyPressed (){
	  if(keyCode === UP_ARROW){
		  Matter.Body.applyForce(paperObject.body.position,{x:130,y:145})
	  }
  }
}