var bg,bgImg;
var sleepImg;
var brushImg;
var gymImg;
var eatImg;
var drinkImg;
var moveImg;
var astro;

function preload(){
  bgImg = loadImage("iss.png");
  sleepImg = loadAnimation("sleep.png");
  brushImg = loadAnimation("brush.png");
  gymImg = loadAnimation("gym11.png","gym12.png");
  eatImg = loadAnimation("eat1.png","eat2.png");
  drinkImg = loadAnimation("drink1.png","drink2.png");
  bathImg = loadAnimation("bath1.png","bath2.png");
  moveImg = loadAnimation("move.png","move1.png","move.png","move1.png");
}

function setup() {
  createCanvas(1000,600);

  bg = createSprite(475, 300, 100, 100);
  bg.addImage(bgImg);
  bg.scale = 0.250;

  astro = createSprite(500,430);
  astro.addAnimation("sleeping",sleepImg);
  astro.scale = 0.100;
}

function draw() {
  background("black");  

  edges = createEdgeSprites();
  astro.bounceOff(edges);

  drawSprites();
  
  if (keyDown("UP_ARROW")){
    astro.addAnimation("brushing",brushImg);
    astro.changeAnimation("brushing");
    astro.y = 350;
    astro.velocityX = 0;
    astro.velocityY = 0;
  }

  if (keyDown("DOWN_ARROW")){
    astro.addAnimation("gymming",gymImg);
    astro.changeAnimation("gymming");
    astro.y = 350;
    astro.velocityX = 0;
    astro.velocityY = 0;
  }

  if (keyDown("RIGHT_ARROW")){
    astro.addAnimation("eating",eatImg);
    astro.changeAnimation("eating");
    astro.y = 350;
    astro.velocityX = -1;
    astro.velocityY = -1;
  }
  
  
  
  if (keyDown("LEFT_ARROW")){
    astro.addAnimation("bathing",bathImg);
    astro.changeAnimation("bathing");
    astro.y = 350;
    astro.velocityX = 0;
    astro.velocityY = 0;
  }

 

  if(keyDown("m")){
    astro.addAnimation("moving",moveImg);
    astro.changeAnimation("moving");
    astro.y = 350;
    astro.velocityX = -1;
    astro.velocityY = -1;
  }
  }

