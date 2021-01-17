
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy;
var boyImage;
function preload()
{
 boyImage=loadImage("sprite/boy.png");
	
}

function setup() {
	createCanvas(1350, 600);


	engine = Engine.create();
	world = engine.world;
	boy = createSprite(350,400,1,1);
	boy.addImage(boyImage);
	boy.scale=0.1;

	//Create the Bodies Here.
    tree = new Tree(900,230,440,550);
	 mango = new Mango(900,250,10);
	 ground = new Ground(600,510,2000,20);
	 stone=new Stone(100,460,50,50);
     attach=new Throw(stone.body,{x:350,y:400});
	
	 mango2=new Mango(1170,130,30);
	   mango3=new Mango(1010,140,30);
	   mango4=new Mango(1000,70,30);
	   mango5=new Mango(1100,70,30);
	   mango6=new Mango(1000,230,30);
	   mango7=new Mango(900,230,40);
	   mango8=new Mango(1140,150,40);
	   mango9=new Mango(1100,230,40);
	   mango10=new Mango(1200,200,40);
	   mango11=new Mango(1120,50,40);
	   mango12=new Mango(900,160,40);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
   tree.display();
   mango.display();
   ground.display();
   stone.display();
   attach.display();
   mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
 mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  detectollision(stone,mango);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
  detectollision(stone,mango9);
  detectollision(stone,mango10);
  detectollision(stone,mango11);
  detectollision(stone,mango12);
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x: mouseX , y: mouseY});
}

function mouseReleased(){
    attach.fly();
}

function detectollision(lstone,lmango){

	if(lstone.body.position.x- lmango.body.position.x <lmango.diametre + lstone.diametre
		&& lmango.body.position.x - lstone.body.position.x  < lmango.diametre + lstone.diametre
		&&lstone.body.position.y -lmango.body.position.y < lmango.diametre + lstone.diametre
		&& lmango.body.position.y - lstone.body.position.y < lmango.diametre + lstone.diametre){
		Matter.Body.setStatic(lmango.body,false);
	}

}
 
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:100,y:465});
		attach.Launch(stone.body);
	}
}




