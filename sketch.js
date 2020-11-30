
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	
}
var paper1;
var ground;
var dustbin3;
var dustbin1;
var dustbin2;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper1=new paper(810,260,10,10)
ground=new Ground(600,height,1200,20)
	Engine.run(engine);
  dustbin3=new dustbin(700,320,40,30);
dustbin1=new dustbin(920,320,40,30);
dustbin2=new dustbin(810,320,40,30);


}


function draw() {
  rectMode(CENTER);
  background(black);
  
paper1.display(),
ground.display(),
dustbin3.display(),
dustbin1.display(),
duatbin2.display(),

  drawSprites();
 
}



