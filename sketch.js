var alien_Image, coin_Image, space_Image, water_Image, ufo_Image, man_Image, ground;

function preload() {
  alien_Image=loadAnimation("invader.png", "invader1.png", "invader2.png");
  coin_Image=loadImage("coin.png");
  space_Image=loadImage("spacebg.jpg");
  ufo_Image=loadImage("ufo.png");
  man_Image=loadAnimation("man.png", "man1.png", "man2.png", "man3.png");
  ground_Image=loadImage("snow.png");
}

function setup() {
  createCanvas(800, 600);

ground=createSprite(600, 580);
ground.addImage("snowground",space_Image)
ground.scale=1.8
ground.x=ground.width/2
ground.velocityX=-3;

invisibleGround=createSprite(400, 550, 800, 50);
//invisibleGround.visible=false;
invisibleGround.scale=1.7


invisibleGround.addImage("snow", ground_Image)
invisibleGround1=createSprite(400, 590, 800, 50);
invisibleGround1.visible=false;

alien=createSprite(100, 450, 20, 50)
alien.addAnimation("alien",alien_Image);
alien.scale=0.6

man=createSprite(240, 445, 20, 50)
man.addAnimation("man",man_Image);
man.scale=0.4

coinGroup=createGroup()

ufoGroup=createGroup()

}

function draw() {
  background(space_Image);  
 

  if(ground.x<0){
  ground.x=ground.width/2 
  }

  if(keyDown("Up_Arrow")){
    man.velocityY=-10
  }

  man.velocityY=man.velocityY+1;
  man.collide(invisibleGround1);

  

  SpawnCoins();
  SpawnUfo();
  drawSprites();
  


}

function SpawnCoins() {

if(frameCount%120===0){
 var coin=createSprite(400, 500, 40, 40);
 coin.velocityX=-2;
 coin.addImage("coin",coin_Image);
 coin.scale=0.01;
 coin.lifeTime=20;
 coin.y=Math.round(random(450, 500));
 coinGroup.add(coin);
}
}

function SpawnUfo() {

  if(frameCount%60===0){
    ufo=createSprite(800,300,20,50);
    ufo.addImage("ufo",ufo_Image);
    ufo.scale=0.05;
    ufo.lifeTime=200;
    ufoGroup.add(ufo);
    ufo.y=Math.round(random(100, 350));
    ufo.velocityX=-4;
    ufo.depth=person.depth;
    man.depth=person.depth+1;
  }
  }