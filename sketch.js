var iss
var spacecraft 
var hasDocked
//var issImg , scImg bgImg



function preload(){
 //issImg=loadImage("iss.png")
 //scImg=loadImage("spacecraft1.png","spacecraft2.png","spacecraft3.png","spacecraft4.png")
}



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  iss = createSprite(50,50,10,10);
  spacecraft = createSprite(150,150,10,10);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}
