
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var groundImage
var score=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  groundImage = loadImage("ground.png");
 

}



function setup() {
  createCanvas(600,200)
  
  //create a monkey sprite 
  monkey = createSprite(50,160,20,50);
  monkey.addAnimation("monnkey",monkey_running );
  monkey.scale = 0.1;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;  

  
  
}


function draw() {

  background(220);
  
  //RESETTING THE GROUND TO MAKE IT INFINITE
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  // jump when the space key is pressed
  if(keyDown("space")&& monkey.y >= 100) {
    monkey.velocityY = -10;
  }
 
  //ADDING GRAVITY  
 // monkey.velocityY = monkey.velocityY + 0.8;
  
  //ADDING Score
    
  score= score + Math.round(frameCount/60);
    
  text("survival time: "+ score,100,100) ;
  
   if(frameCount%80 ==0){
  banana = createSprite(300,50,20,50);
  banana.addImage("monnkey",bananaImage );
  banana.scale = 0.1;
   } 
  if(frameCount%100 ==0){
  obstacle = createSprite(200,180,400,20);
  obstacle.addImage("ground",obstaceImage);
  obstacle.x = obstacle.width /2;
  obstacle.velocityX = -4;   
  obstacle.scale = 0.1;
  
  }
drawSprites();
}