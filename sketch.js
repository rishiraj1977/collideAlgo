var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(600, 400, 50, 80);
  movingRect=createSprite(400, 200, 80, 30);
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
  fixedRect.debug=true;
  movingRect.debug=true;
}

function draw() {
  background(0,0,0);
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  console.log(movingRect.x-fixedRect.x);
  if (movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 
     && movingRect.y-fixedRect.y<fixedRect.width/2+movingRect.width/2 && fixedRect.y-movingRect.y<fixedRect.width/2+movingRect.width/2 ){
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  } else {
    fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
  }
  drawSprites();
}
