const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand1,stand2;
var block1,block2,block3,block4,block5,block6
var block7,block8,block9,block10,block11,block12;
var block13,block14,block15,block16;
var block17,block18,block19,block20,block21;
var block22,block23,block24,block25,sling,polygon;
function setup() {
  createCanvas(1500,500);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);
  stand1 = new Ground(400,300,300,20)
  stand2 = new Ground(1160,380,240,20)
  //you are trying to create the ground before creating the physics engine & the world
  //engine = Engine.create();
  //world = engine.world;

  //First
  block1 = new Box(310,290,40,40);
  block2 = new Box(340,290,40,40);
  block3 = new Box(370,290,40,40);
  block4 = new Box(400,290,40,40);
  block5 = new Box(430,290,40,40);
  block6 = new Box(460,290,40,40);
  block7 = new Box(490,290,40,40);

  block8 = new Box(340,250,40,40);
  block9 = new Box(370,250,40,40);
  block10 = new Box(400,250,40,40);
  block11 = new Box(430,250,40,40);
  block12 = new Box(460,250,40,40);
 
  block13 = new Box(370,220,40,40);
  block14 = new Box(400,220,40,40);
  block15 = new Box(430,220,40,40);

  block16 = new Box(400,180,40,40)
  
  //Second
  block17 = new Box(1100,370,40,40);
  block18 = new Box(1130,370,40,40);
  block19 = new Box(1160,370,40,40);
  block20 = new Box(1190,370,40,40);
  block21 = new Box(1220,370,40,40);

  block22 = new Box(1130,340,40,40);
  block23 = new Box(1160,340,40,40);
  block24 = new Box(1190,340,40,40);

  block25 = new Box(1160,300,40,40);

  polygon = new Polygon(100,200,90,70)
  sling = new SlingShot(polygon.body,{x:100,y:200});
}

function draw() {
  background(247,247,247);
   Engine.update(engine);
  textSize(16)
  text("Press space to get another chance",500,250);
  
   stand1.display(); 
   stand2.display();

   block1.display();
   block2.display();
   block3.display();
   block4.display();
   block5.display();
   block6.display();
   block7.display();

   block8.display();
   block9.display();
   block10.display();
   block11.display();
   block12.display();

   block13.display();
   block14.display();
   block15.display();

   block16.display();

   block17.display();
   block18.display();
   block19.display();
   block20.display();
   block21.display();

   block22.display();
   block23.display();
   block24.display();

   block25.display();
   
   polygon.display();
   
   //block2.display(); 
  //drawSprites();
}

function mouseDragged(){
Matter.Body.setPosition(polygon.body,{x:mouseX , y:mouseY})
}

function mouseReleased(){
sling.fly();
}

function keyPressed(){
 if(keyCode === 32){
 sling.attach(polygon.body);
 }

}
