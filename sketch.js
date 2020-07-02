var car, wall,wall_Image;
var speed,weight,deformation;

function setup() {

  createCanvas(800,400);

  speed = random(55,90);
  weight = random(400,1500);
  deformation = 0;

   car = createSprite(25, 200, 50, 50);
   car.velocityX = speed;
   car.shapeColor = "blue";

   wall = createSprite(750,200,60);
   wall.shapeColor = "Maroon";
   
}

function draw() {

  background("black"); 
  
  if(car.isTouching(wall)){
    deformation = 0.5*weight*speed*speed/22500;
    car.velocityX = 0;
    car.x = 725;
  }

  if(deformation <=100){
    car.shapeColor = "green";
  }

  else if(deformation >100 && deformation <= 180){
    car.shapeColor = "yellow";
  }

  else if(deformation >180){
    car.shapeColor = "red;"
  }

  

  drawSprites();

  text("speed: " + speed,50,100);
  text("weight: " + weight,50,200);
  text("deformation: " + deformation,50,300);
}