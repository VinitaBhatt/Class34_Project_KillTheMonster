const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var bgImage;
var ground;
var hero;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16,box17,box18,box19,box21;
var box22,box23,box24,box25,box26;
var fly;
var monster;


function preload() {
//preload the images here
bgImage = loadImage("images/GamingBackground.png");

}

function setup() {
  createCanvas(4000, 2000);

  engine = Engine.create();
  world = engine.world;

  ground=new Ground(500,500,1500,20);

  hero = new Hero(200,300);

  box1 = new Box(600,100,50,50);
  box2 = new Box(600,100,50,50);
  box3 = new Box(600,100,50,50);
  box4 = new Box(600,100,50,50);
  box5 = new Box(600,100,50,50);
  box6 = new Box(600,100,50,50);
  box7 = new Box(600,100,50,50);

  box8 = new Box(700,100,50,50);
  box9 = new Box(700,100,50,50);
  box10 = new Box(700,100,50,50);
  box11 = new Box(700,100,50,50);
  box12 = new Box(700,100,50,50);
  box13 = new Box(700,100,50,50);

  box14 = new Box(800,50,50,50);
  box15 = new Box(800,50,50,50);
  box16 = new Box(800,50,50,50);
  box17 = new Box(800,50,50,50);
  box18 = new Box(800,50,50,50);
  box19 = new Box(800,50,50,50);
  box20 = new Box(800,50,50,50);
  box21 = new Box(800,50,50,50);

  box22 = new Box(900,100,50,50);
  box23 = new Box(900,100,50,50);
  box24 = new Box(900,100,50,50);
  box25 = new Box(900,100,50,50);
  box26 = new Box(900,100,50,50);


  fly = new Fly(hero.body, {x:200,y:20});

  monster = new Monster(1200,350);
  
}

function draw() {
  
  background(bgImage);
  Engine.update(engine);

  ground.display();
  hero.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();

  fly.display();

  monster.display();
}


function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}
