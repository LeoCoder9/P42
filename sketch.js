var spaceImage, SC1, SC2, SC3, SC4, issImage

var iss, spacecraft
var hasDocked = false

var touchPoint 

function preload(){
  spaceImage = loadImage("spacebg.jpg")

  SC1 = loadImage("spacecraft1.png")
  SC2 = loadImage("spacecraft2.png")
  SC3 = loadImage("spacecraft3.png")
  SC4 = loadImage("spacecraft4.png")

  issImage = loadImage("iss.png")
}



function setup() {
  createCanvas(800,400);
   iss = createSprite(400, 150, 50, 50);
   iss.addImage(issImage)
   iss.scale = 0.7

   spacecraft = createSprite(400, 300, 50, 50)
   spacecraft.addImage("Normal", SC1)
   spacecraft.addImage("Left", SC4)
   spacecraft.addImage("Right", SC3)
   spacecraft.addImage("Up", SC2)
   spacecraft.scale = 0.15

   touchPoint = createSprite(355, 170, 4,4)
   touchPoint.visible = true

}

function draw() {
  background(spaceImage);
  
  if(!hasDocked){

    if(keyDown("LEFT_ARROW")){
      spacecraft.changeImage("Left", SC4)

      spacecraft.x = spacecraft.x -0.8
    }
    if(keyDown("RIGHT_ARROW")){
      spacecraft.changeImage("Right", SC3)
      spacecraft.x = spacecraft.x +0.8
    }
    if(keyDown("UP_ARROW")){
      spacecraft.changeImage("Up", SC1)
      spacecraft.y = spacecraft.y -0.8
    }
    if(keyDown("DOWN_ARROW")){
      spacecraft.changeImage("Normal", SC2)
      spacecraft.y = spacecraft.y +0.8
    }
  }

   if(spacecraft.isTouching(touchPoint)){
     console.log("Docked")
     hasDocked = true
     
     textSize(20)
     text("DOCKING SUCCESSFUL!", 350, 340)
   }
     
     

  drawSprites();
}