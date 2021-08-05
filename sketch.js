var iss, spacecraft;
var hasDocked = false;
var backgroundIMG, issIMG, spacecraftIMG, doubleMotorsIMG, leftMotorIMG, rightMotorIMG;



function preload() {
  backgroundIMG = loadImage("spacebg.jpg");

  issIMG = loadImage("iss.png");

  spacecraftIMG = loadImage("spacecraft1.png");
  doubleMotorsIMG = loadImage("spacecraft2.png");
  leftMotorIMG = loadImage("spacecraft3.png");
  rightMotorIMG = loadImage("spacecraft4.png");
}


function setup() {
  createCanvas(1500 ,750);

  iss = createSprite(700, 240, 50, 50);
  iss.addImage(issIMG);
  iss.scale = 0.8;

  spacecraft = createSprite(random(600, 1000), 560, 50, 50);
  spacecraft.addImage(spacecraftIMG);
  spacecraft.scale = 0.25;
  spacecraft.depth = iss.depth - 1;
}


function draw() {
  //background(255,255,255);
  background(backgroundIMG);
  drawSprites();
  console.log(spacecraft.x, spacecraft.y);

  if(!hasDocked) {
    if(keyDown(LEFT_ARROW)) {
      spacecraft.addImage(rightMotorIMG);
      spacecraft.x = spacecraft.x - 4;
    } 
    
    else if(keyDown(RIGHT_ARROW)) {
      spacecraft.addImage(leftMotorIMG);
      spacecraft.x = spacecraft.x + 4;
    } 
    
    else if(keyDown(DOWN_ARROW)) {
      spacecraft.addImage(doubleMotorsIMG);
      spacecraft.y = spacecraft.y + 4;
    } 
    
    else if(keyDown(UP_ARROW)) {
      spacecraft.y = spacecraft.y - 4;
    } 
    
    else {
      spacecraft.addImage(spacecraftIMG);
    }
  }

  if(spacecraft.y < 400 && spacecraft.x > 640 && spacecraft.x < 645) {
    hasDocked = true;
    fill("white");
    textSize(40);
    text("Docking Successful!", 220, 350);
  }
}

console.log(spacecraft.x)