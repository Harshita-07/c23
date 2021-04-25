var fixedRect,movingRect; 
var object1, object2;

function setup() {
  createCanvas(400,400); 
  fixedRect= createSprite(200, 200, 50, 80); 
  movingRect= createSprite(400, 200, 80, 30); 

  object1 = createSprite(200, 200, 20,20)
}
  function isTouching(movingRect,object1){ 
    if (movingRect.x - object1.x <= object1.width/2 + movingRect.width/2 &&
      object1.x-movingRect.x <= object1.width/2 + movingRect.width/2 && 
      movingRect.y - object1.y <= object1.height/2 + movingRect.height/2 && 
      object1.y-movingRect.y <= object1.height/2 + movingRect.height/2) { 

     return true;
    } 
     else { 
    return false;
    
    }
    

  }
  function draw() { 
    background("black"); 
    movingRect.x=World.mouseX; 
    movingRect.y=World.mouseY; 
    console.log(movingRect.x-object1.x)

  if(isTouching(movingRect, object1)) {
    movingRect.shapeColor = "red"; 
    object1.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green"; 
    object1.shapeColor = "green";

  }


        drawSprites();
      
  }
