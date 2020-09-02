var car,wall;
var speed,weight,deformation;

function setup() {
  createCanvas(800,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(700,200,60,height/2);
  speed = random(55,90);
  weight = random(400,1500);
  car.shapeColor="blue";
  wall.shapeColor="white";
  deformation=0;
}

function draw() {
  background(0); 
  car.velocityX = speed;
  
  if(wall.x - car.x < (car.width+wall.width)/2)
  {
    car.velocityX=0;
    deformation=0.5 * weight * speed* speed/22500;
    
    if (deformation>180)
    {
      wall.shapeColor="red";
      car.shapeColor="red";
    }
      if (deformation<180 && deformation>100)
      {
        wall.shapeColor="yellow";
        car.shapeColor="yellow";

      }
      if(deformation<100)
      {
         wall.shapeColor="green";
         car.shapeColor="green";
      }
    
  }
  drawSprites();
}