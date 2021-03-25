var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	box2=new Box(550,559,20,200);
	box1=new Box(250,559,20,200);
	box3=new Box(400,640,300,20);
}


function draw() {
Engine.update(engine);
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  groundSprite.x= ground.position.x 
  packageSprite.y= packageBody.position.y 
  groundSprite.y= ground.position.y 
packageBody.position.x=helicopterSprite.x;
  drawSprites();
 keyPressed();
 box3.display();
 box2.display();
 box1.display();
 helicopterMove();



}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
    Body.setStatic(packageBody,false);
 
  }
}

function helicopterMove(){
	var pos=helicopterSprite.x;
	if(keyCode===LEFT_ARROW && packageBody.position.y<400){
		helicopterSprite.x--;
	}
	if(keyCode === RIGHT_ARROW && packageBody.position.y<400){
		helicopterSprite.x++;
	}
	translate(helicopterSprite.x,0);
	packageBody.x=0;
	
}
