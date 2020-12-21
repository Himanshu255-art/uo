
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	log=new ball(200,500,60)
	log2=new ball(260,500,60)
	log3=new ball(320,500,60)
	log4=new ball(380,500,60)
	log5=new ball(440,500,60)

       mob=new ground(330,230,400,50)
  
	tt=new rope(100,200,1000,10)
	   

	 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  
  log.display();
 log2.display();
 log3.display();
 log4.display();
 log5.display();
mob.display();
tt.display();



}



