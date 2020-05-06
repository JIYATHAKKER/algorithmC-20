var fixedRect,movingRect;
var obj1,obj2;

function setup() {
  createCanvas(800,400);
 fixedRect=createSprite(400, 200, 30, 80);
 movingRect=createSprite(200,200,80,30);
 obj1=createSprite(300,50,30,80);
 obj2=createSprite(300,380,80,30);
 obj1.velocityY=2;
 obj2.velocityY=-2;
 obj1.shapeColor="red";
 obj2.shapeColor="white";
 fixedRect.shapeColor="blue";
 movingRect.shapeColor="blue";
 obj1.debug=true;
 obj2.debug=true;
}

function draw() {
  background(0); 
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  if(fixedRect.width/2+movingRect.width/2>fixedRect.x-movingRect.x&&fixedRect.width/2+movingRect.width/2>movingRect.x-fixedRect.x&&fixedRect.height/2+movingRect.height/2>movingRect.y-fixedRect.y&&fixedRect.height/2+movingRect.height/2>fixedRect.y-movingRect.y){
    fixedRect.shapeColor="green";
 movingRect.shapeColor="green";
  }
  else{
    fixedRect.shapeColor="blue";
 movingRect.shapeColor="blue";
  }
 if(obj1.width/2+obj2.width/2>obj1.x-obj2.x&&obj1.width/2+obj2.width/2>obj2.x-obj1.x){
   obj1.velocityX=obj1.velocityX*(-1);
   obj2.velocityX=obj2.velocityX*(-1);
 } 
 if(obj1.height/2+obj2.height/2>obj1.y-obj2.y&&obj1.height/2+obj2.height/2>obj2.y-obj1.y){
  obj1.velocityY=obj1.velocityY*(-1);
  obj2.velocityY=obj2.velocityY*(-1);
 }
  drawSprites();
}