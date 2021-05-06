var car,wall
var weight,speed


function setup() {
  createCanvas(1600,400);

  car = createSprite(50, 200, 50, 50);
  wall = createSprite (1200,200,60,height/2);

  

  speed=random(55,90);
  weight=random(1500,900)

  car.velocityX = 25;
}

function draw() {
  background("black");  

  var deformation=(0.5 * weight * speed * speed)/22500

  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX = 0;
    car.x=wall.x-30;

    if(deformation>180)
    {
      car.shapeColor=color("red")
      wall.shapeColor=color("red")
      
    }
    else if(deformation<180 && deformation>100)
    {
    car.shapeColor=color("orange")
    wall.shapeColor=color("orange")
    
    }
    else if(deformation<100)
    {
      car.shapeColor=color("green")
      wall.shapeColor=color("green")
      
    }

    
  }
  

  drawSprites();
}