var Mouse, MouseImg1,MouseImg2,MouseImg3;
var Cat, CatImg1,CatImg2,CatImg3;
var backGround, backGroundImg;

function preload() {
 
  CatImg1 = loadAnimation("images/cat1.png");
  CatImg2 = loadAnimation("images/cat2.png","images/cat3.png");
  CatImg3 = loadAnimation("images/cat4.png");
  MouseImg1 = loadAnimation("images/mouse1.png");
  MouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
  MouseImg3 = loadAnimation("images/mouse4.png");
  backGroundImg = loadImage("images/garden.png");
}

function setup(){
  createCanvas(1000,800);

  Mouse = createSprite(200,600);
  Mouse.addAnimation("Mousealking",MouseImg1);
  Mouse.scale = 0.2;

  Cat = createSprite(870,600);
  Cat.addAnimation("Catsitting",CatImg1);
  Cat.scale = 0.2;
  Cat.velocityX = 0;
}

function draw() {
  background(backGroundImg);
    
  if(Cat.x - Mouse.x < (Cat.width - Mouse.width)/2){
     Cat.addAnimation("catHappy",CatImg3);
     Cat.changeAnimation("catHappy");
     Cat.velocityX = 0;
     Cat.x = 350;

     Mouse.addAnimation("mouseHappy",MouseImg3);
     Mouse.changeAnimation("mouseHappy");
  }
     drawSprites();
}


function keyPressed(){

   if(keyCode === LEFT_ARROW){

     Mouse.addAnimation("mouseTeasing",MouseImg2);
     Mouse.changeAnimation("mouseTeasing");
     Mouse.frameDelay = 8;

     Cat.addAnimation("catRunning",CatImg2);
     Cat.changeAnimation("catRunning");
     Cat.velocityX = -3;
  }
}
