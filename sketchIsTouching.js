var fixedRect, movingRect,gameObject,gameObject2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "yellow";
  gameObject = createSprite(300,300,80,50);
  gameObject2=createSprite(500,300,50,50);
}

function draw() {
  background(0,0,0); 
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY; 
  // isTouching(gameObject,movingRect);
  if(isTouching(gameObject2,movingRect)){
    movingRect.shapeColor = "blue";
    gameObject2.shapeColor = "blue"
  }
  else{
    movingRect.shapeColor = "yellow";
    gameObject2.shapeColor = "yellow";
  }

  drawSprites();
}


//boolean values  : true, false