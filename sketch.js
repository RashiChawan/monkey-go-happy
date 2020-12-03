
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running=loadImage("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

 

function setup() {
  
createCanvas(600, 400);

  
 monkey = createSprite(60,315,20,50);
 monkey.addImage( monkey_running);
 monkey.velocityX=0;
  

  monkey.scale = 0.16; 
  
  ground=createSprite(400,350,1000,10);
  ground.velocityX=-4;
  ground.x=ground.width/2
  
  
FoodGroup= createGroup();
  obstacleGroup=createGroup();
  score=0
}


function draw() {
  background(225)
  textSize(20);
  fill("black")
  text("survival time:"+score,200,50)
  score= score+Math.round(frameCount/60)
  
  
 if(ground.x<0){
   ground.x=ground.width/2;
 } 
  
  if(keyDown("space")){
    monkey.velocityY=-12;
  }
  
  monkey.velocityY=monkey.velocityY+1;
  
  
  
  monkey.collide(ground);
  if(monkey.isTouching(FoodGroup)){
    
    FoodGroup.destroyEach();
    
  }
 
  
  
  
  fruits();
  obstacles();
  
  

  drawSprites();
}

function fruits() {
 
  if (frameCount % 300 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,101));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 200;
    

    
    FoodGroup.add(banana);
  }
}

function obstacles() {
 
  if (frameCount % 260=== 0) {
    var obstacle  = createSprite(600,120,40,10);
    obstacle.y = Math.round(random(330,330));
   obstacle.addImage(obstacleImage);
   obstacle.scale = 0.16;
   obstacle.velocityX = -3;
    obstacle.lifetime = 200;
    

    
  
    obstacleGroup.add(obstacle);
  }
}
