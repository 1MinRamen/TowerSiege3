const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand1, stand2;
var score = 0;

//stand 1 blocks
var block1, block2, block3, block4, block5;
var block6, block7, block8, block9;
var block10,block11,block12;
var block13, block14;
var block15;

//stand 2 blocks
var block16, block17, block18, block19, block20;
var block21, block22, block23, block24;
var block25,block26,block27;
var block28, block29;
var block30;

var polygon, polygonImage;

function preload(){
    polygonImage = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1400,800);

    engine = Engine.create();
    world = engine.world;

    stand1 = new Ground(600,500,250,20);
    stand2 = new Ground(1200,300,250,20);

    //stand 1 blocks

    block1 = new Block(510,475,43,50);
    block2 = new Block(555,475,43,50);
    block3 = new Block(600,475,43,50);
    block4 = new Block(645,475,43,50);
    block5 = new Block(690,475,43,50);

    block6 = new Block(530,425,43,50);
    block7 = new Block(575,425,43,50);
    block8 = new Block(620,425,43,50);
    block9 = new Block(665,425,43,50);

    block10 = new Block(550,375,43,50);
    block11 = new Block(595,375,43,50);
    block12 = new Block(640,375,43,50);

    block13 = new Block(575,325,43,50);
    block14 = new Block(620,325,43,50);
    
    block15 = new Block(595,275,43,50);

    //stand 2 blocks

    block16 = new Block(1110,275,43,50);
    block17 = new Block(1155,275,43,50);
    block18 = new Block(1200,275,43,50);
    block19 = new Block(1245,275,43,50);
    block20 = new Block(1290,275,43,50);

    block21 = new Block(1130,225,43,50);
    block22 = new Block(1175,225,43,50);
    block23 = new Block(1220,225,43,50);
    block24 = new Block(1265,225,43,50);

    block25 = new Block(1150,175,43,50);
    block26 = new Block(1195,175,43,50);
    block27 = new Block(1240,175,43,50);

    block28 = new Block(1170,125,43,50);
    block29 = new Block(1215,125,43,50);

    block30 = new Block(1190,75,43,50);

    polygon = Bodies.circle(175,300,20);
    World.add(world,polygon);

    sling = new SlingShot(this.polygon,{x:200,y:300});
}

function draw(){
    background(0);
    Engine.update(engine);

    stand1.display();
    stand2.display();

    fill('white');
    text("SCORE : "+score,750,40);


    //stand 1 blocks
    fill('lightblue');
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();

    fill('pink');
    block6.display();
    block7.display();
    block8.display();
    block9.display();

    fill('lightgreen');
    block10.display();
    block11.display();
    block12.display();

    fill('yellow');
    block13.display();
    block14.display();

    fill('red');
    block15.display();

    //stand 2 blocks
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();

    fill('yellow');
    block21.display();
    block22.display();
    block23.display();
    block24.display();

    fill('lightgreen');
    block25.display();
    block26.display();
    block27.display();

    fill('pink');
    block28.display();
    block29.display();

    fill('lightblue');
    block30.display();

    //score
    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score();
    block22.score();
    block23.score();
    block24.score();
    block25.score();
    block26.score();
    block27.score();
    block28.score();
    block29.score();
    block30.score();

    imageMode(CENTER);
    image(polygonImage,polygon.position.x,polygon.position.y,40,40);

    sling.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    if(keyCode === 32){
        this.polygon.trajectory = [];
       sling.attach(this.polygon);
       Matter.Body.setPosition(this.polygon,{x:200,y:300});
       this.polygon.velocityX = 0;
       this.polygon.velocityY = 0;
    }
}