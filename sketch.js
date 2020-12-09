
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint; 
var roof; 
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
    
	//Create the Bodies Here.
 

	Engine.run(engine); 

	roof = new Roof(400,200,280,30)
	
	bob1 = new Bob(300,400,50)
	
	bob2 = new Bob(350,400,50)
	
	bob3 = new Bob(400,400,50)
	
	bob4 = new Bob(450,400,50)
	
	bob5 = new Bob(500,400,50)
	
	rope1= new Chain(bob1.body,roof.body,-100,0)
	rope2= new Chain(bob2.body,roof.body,-50,0)
	rope3= new Chain(bob3.body,roof.body,0,0)
	rope4= new Chain(bob4.body,roof.body,50,0)
	rope5= new Chain(bob5.body,roof.body,100,0)


}




function draw() {
  rectMode(CENTER);
  background("white");
  roof.display();
  bob1.display();
  bob2.display()
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display()
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	   Matter.Body.applyForce(bob1.body,bob1.body.position,{x:30, y: 30})
}
}
