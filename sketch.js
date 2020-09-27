var fixedrect,movingrect;

function setup() {
  createCanvas(800,400);

  fixedrect = createSprite(400,200,40,40);
  fixedrect.shapeColor = "green";

  movingrect = createSprite(400, 200, 50, 50);
  movingrect.shapeColor = "green";

}

function draw() {
  background("skyblue"); 

  if(movingrect.x - fixedrect.x<fixedrect.width/2+movingrect.width/2&&
     fixedrect.x - movingrect.x<fixedrect.width/2+movingrect.width/2&&
     fixedrect.y - movingrect.y<fixedrect.height/2+movingrect.height/2&&
     movingrect.y- fixedrect.y<fixedrect.height/2+movingrect.height/2){
    movingrect.shapeColor = "black";
    fixedrect.shapeColor = "black";
  }
  else
  {
    movingrect.shapeColor = "green";
    fixedrect.shapeColor = "green";
  }

  

  movingrect.y = World.mouseY;
  movingrect.x = World.mouseX;
  
  drawSprites();
}