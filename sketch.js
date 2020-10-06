const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball1, bin1, bin2;
var ballImg;

// function preload(){
//     ballImg = loadImage("paper.png");
// }

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    var test={
        isStatic: false
    }

    ground = Bodies.rectangle(450,400,900,20,ground_options);
    World.add(world,ground);
    
    ball1 = new Ball(200, 200);

    bin1 = new Dustbin(600, 350, 10, 100, test);

    //bin2 = new Dustbin(700, 400, 10, 100);
    // console.log(keyCode);
}

function draw(){
    background(200);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,900,20);
    ball1.display();
    //bin2.display();
    bin1.display();

    bin1.depth = 1;
    ball1.depth = 1;
}

function keyPressed(){
    if(keyCode === RIGHT_ARROW){
        Matter.Body.applyForce(ball1.body, ball1.body.position, {x: 50, y: -70});
    }
    if(keyCode === LEFT_ARROW){
        Matter.Body.applyForce(ball1.body, ball1.body.position, {x: -50, y: -70});
    }
}