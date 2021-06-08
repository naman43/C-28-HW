//Giving NickNames!!
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

//Creating Variables!!
var dustbinObj, paperObject,groundObject;	
var world, engine;
var slingshot;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	paperObject=new Paper(200,450,70);
	groundObject=new Ground(width/2,670,width,20);
	dustbinObj=new Dustbin(1200,650);
	
	stroke(43,255,40);
	slingshot = new Slingshot(paperObject.body,{x:200, y:100});

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1600,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	Render.run(render);  
}

function draw() {
  rectMode(CENTER);
  background(230);
 
  
  paperObject.display();
  groundObject.display();
  dustbinObj.display();
  slingshot.display(); 	

}

function keyPressed() {
  	if (keyCode === UP_ARROW) {
    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});
  	}
}

function mouseDragged(){
    Matter.Body.setPosition(paperObject.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}



