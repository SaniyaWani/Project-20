var car , wall;
var speed , weight


function setup() {

  speed=random(55,90);
  weight=random(400,1500);
  createCanvas(1600,400);
 wall= createSprite(1500, 200, 60, height/2);
wall.shapeColor=(80,80,80);

car= createSprite(50, 200, 50, 50);
car.shapeColor="blue"

}

function draw() {
  background("white");  
  
  drawSprites();
  car.velocityX=speed;

  if(wall.x-car.x < (car.width+wall.width)/2){
car.velocityX=0;
var d =0.5*weight*speed*speed/22509;
if(d>180){
  car.shapeColor=color(255,0,0);
}

if(d<100){
  car.shapeColor=color(0,255,0);
}

if(d>100 && d<180){
  car.shapeColor=color(230,230,0);
}

  }
}