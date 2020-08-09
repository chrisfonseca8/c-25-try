const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,ground,pig;
var log,box3,box4,pig2,log2;
var bird,log3,log4;
var backgroundimg;

function preload(){
backgroundimg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,350,70,70);
    box2 = new Box(900,350,70,70);
    box3 = new Box(700,270,70,70);
    box4 = new Box(880,270,70,70);
    ground = new Ground(width/2,height,width,20)
    pig = new Pig(800,350);
    pig2 = new Pig(800,270);
    log = new Log (800,300,270,PI/2);
    log2 = new Log (800,250,270,PI/2);
    bird = new Bird(100,100)
    log3 = new Log (770,181,270,PI/7);
    log4 = new Log (843,181,270,PI/-7);
    

}

function draw(){
   background(backgroundimg)
    Engine.update(engine);
    // console.log(box2.body.position.x);
    // console.log(box2.body.position.y);
    // console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display();
    pig.display();
    pig2.display();
    log.display();
    log2.display();
    bird.display();
    log3.display();
    log4.display();
    console.log(BaseClass);

    
}