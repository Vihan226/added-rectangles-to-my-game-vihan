var pacman;
var pacmanrImage;
var pacmanlImage;
var pacmanuImage;
var pacmandImage;
var pacmancircleImage;
var line1,line2,line3,line4,line5,line6,line7,line8,line9,line10;
var food1,food2,food3,food4,food5,food6,food7,food8,food9,food10,food11,food12,food13,food14,food15,food16,food17,food18,food19,food20;
var score;
function preload(){
  pacmanrImage= loadImage("bgrightpacman.png")
  pacmanlImage= loadImage("bgleftpacman.png")
  pacmandImage= loadImage("bgdownpacman.png")
  pacmanuImage= loadImage("bguppacman.png")
  pacmancircleImage= loadImage("bgusecircle.png")
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  pacman=createSprite(width/1.75-5,height/2+10,width-width/1,100)
  pacman.scale=.3     
  
  line1=createSprite(width/1.75-10,height/2+56,width-width/3,10);
  line1.shapeColor="blue"
 
  
  line2=createSprite(width/1.75-10,height/2-12.5,width-width/3,10);
  line2.shapeColor="blue"
  
  line3=createSprite(width/.9-width/2,height/2+110,10)
  line3.shapeColor="blue"

  line4=createSprite(width/2-50,height/2-height/2.15,width-width/8,10)
  line4.shapeColor="blue"
  
  line5=createSprite(width/2-width/2.109,height/2,10,height-53)
  line5.shapeColor="blue"

  line6=createSprite(width/2-50,height-25,width-width/8,10)
  line6.shapeColor="blue"

  line7=createSprite(width/1.11-width/800,height/2,10,height-53)
  line7.shapeColor="blue"

  line8=createSprite(width/1.75-10,height/2-110,width-width/3,10)
  line8.shapeColor="blue"

  
  line9=createSprite(width/1.37-width/2,height/2-60,10);
  line9.shapeColor="blue"

  food1=createSprite(width/1.45-width/2,height/2-60,15,15)
  food1.shapeColor="yellow"

  food2=createSprite(width/1.45-width/2,height/2-90,15,15)
  food2.shapeColor="yellow"
  
  
  food3=createSprite(width/1.45-width/2,height/2-120,15,15)
  food3.shapeColor="yellow"

  
  food4=createSprite(width/1.45-width/2,height/2-150,15,15)
  food4.shapeColor="yellow"

  food5=createSprite(width/1.41-width/2,height/2-150,15,15)
  food5.shapeColor="yellow"
  
  food6=createSprite(width/1.38-width/2,height/2-150,15,15)
  food6.shapeColor="yellow"

  food7=createSprite(width/1.35-width/2,height/2-150,15,15)
  food7.shapeColor="yellow"

  food8=createSprite(width/1.32-width/2,height/2-150,15,15)
  food8.shapeColor="yellow"

  food9=createSprite(width/1.29-width/2,height/2-150,15,15)
  food9.shapeColor="yellow"

  food10=createSprite(width/1.26-width/2,height/2-150,15,15)
  food10.shapeColor="yellow"

  food11=createSprite(width/1.23-width/2,height/2-150,15,15)
  food11.shapeColor="yellow"

  food12=createSprite(width/1.20-width/2,height/2-150,15,15)
  food12.shapeColor="yellow"

  food13=createSprite(width/1.17-width/2,height/2-150,15,15)
  food13.shapeColor="yellow"

  food14=createSprite(width/1.14-width/2,height/2-150,15,15)
  food14.shapeColor="yellow"

  food15=createSprite(width/1.11-width/2,height/2-150,15,15)
  food15.shapeColor="yellow"

  food16=createSprite(width/.6-width/1,height/2+80,15,15)
  food16.shapeColor="yellow"

  food17=createSprite(width/.59-width/1,height/2+80,15,15)
  food17.shapeColor="yellow"

  food18=createSprite(width/.58-width/1,height/2+80,15,15)
  food18.shapeColor="yellow"

  food19=createSprite(width/.57-width/1,height/2+80,15,15)
  food19.shapeColor="yellow"

  food20=createSprite(width/.56-width/1,height/2+80,15,15)
  food20.shapeColor="yellow"

  score=0
}

function draw() {
  background("black");
  text("Score: "+score,width/.56-width/1,height/2-200)
  if(keyDown("LEFT_ARROW")){
    pacman.addImage("left",pacmanlImage)
   // pacman.addImage("left",pacmancircleImage)
    pacman.scale=.25
    pacman.velocityX=-5
    pacman.velocityY=0
  }
  if(keyDown("DOWN_ARROW")){
    pacman.addImage("left",pacmandImage)
    pacman.scale=.25
    pacman.velocityY=5
    pacman.velocityX=0
  }
  if(keyDown("RIGHT_ARROW")){
    pacman.addImage("left",pacmanrImage)
    pacman.scale=.25
   pacman.velocityX=5
   pacman.velocityY=0

  }
  if(keyDown("UP_ARROW")){
    pacman.addImage("left",pacmanuImage)
    pacman.scale=.25
    pacman.velocityY=-5
    pacman.velocityX=0
  }
  if(pacman.isTouching(food1)){
    score=score+1
    food1.destroy();
  }
  if(pacman.isTouching(food2)){
    score=score+1
    food2.destroy();
  }
  if(pacman.isTouching(food3)){
    score=score+1
    food3.destroy();
  }
  if(pacman.isTouching(food4)){
    score=score+1
    food4.destroy();
  }
  if(pacman.isTouching(food5)){
    score=score+1
    food5.destroy();
  }
  if(pacman.isTouching(food6)){
    score=score+1
    food6.destroy();
  }
  if(pacman.isTouching(food7)){
    score=score+1
    food7.destroy();
  }
  if(pacman.isTouching(food8)){
    score=score+1
    food8.destroy();
  }
  if(pacman.isTouching(food9)){
    score=score+1
    food9.destroy();
  }
  if(pacman.isTouching(food10)){
    score=score+1
    food10.destroy();
  }
  if(pacman.isTouching(food11)){
    score=score+1
    food11.destroy();
  }
  if(pacman.isTouching(food12)){
    score=score+1
    food12.destroy();
  }
  if(pacman.isTouching(food13)){
    score=score+1
    food13.destroy();
  }
  if(pacman.isTouching(food14)){
    score=score+1
    food14.destroy();
  }
  if(pacman.isTouching(food15)){
    score=score+1
    food15.destroy();
  }
  if(pacman.isTouching(food16)){
    score=score+1
    food16.destroy();
  }
  if(pacman.isTouching(food17)){
    score=score+1
    food17.destroy();
  }
  if(pacman.isTouching(food18)){
    score=score+1
    food18.destroy();
  }
  if(pacman.isTouching(food19)){
    score=score+1
    food19.destroy();
  }
  if(pacman.isTouching(food20)){
    score=score+1
    food20.destroy();
  }
 
  createEdgeSprites();
  pacman.bounceOff(line1);
  pacman.bounceOff(line2);
  pacman.bounceOff(line3);
  pacman.bounceOff(line4);
  pacman.bounceOff(line5);
  pacman.bounceOff(line6);
  pacman.bounceOff(line7);
  pacman.bounceOff(line8);
  pacman.bounceOff(line9);

 drawSprites();
    
}

  