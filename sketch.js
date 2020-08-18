
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stone,tree,ground
var boy
var mango1,mango2,mango3,mango4,mango5
var option={
	isStatic:false,
	restitution:0,
	friction:1,
	density:1.2


}
function preload()
{
	boy.loadImage('boy.png')
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	stone=new Stone(200,70);
	tree = new Tree();
	ground=new Ground();
	boy = new Boy(200,50);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
boy.display();
stone.display();
tree.display();
ground.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5. display();

function detectcollision(lstone,lmango){
	mangoBodyPosition=lmango.body.mangoBodyPosition
}
drawSprites();
 
}



