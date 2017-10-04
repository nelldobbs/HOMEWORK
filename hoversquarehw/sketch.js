var img;
var rectX = 200;
var rectY = 100;
var rectSize = 300;
var rectTop = rectY;
var rectBottom = rectY + rectSize;
var rectLeft = rectX;
var rectRight = rectX + rectSize;
var ColR;


function preload(){
    
  
     img = loadImage("flower.png"); 
    
}
function setup(){
    
    createCanvas(windowWidth, windowHeight);
}

function draw(){
    
  background(100,50,200);
    colR= 255;
    
    if(mouseX > rectLeft && mouseX < rectRight && mouseY > rectTop && mouseY < rectBottom){
        
      fill(colR, 300, 500);
  rect(rectX,rectY,rectSize,rectSize);
     
      colR = 0;  
        
    }else{
        
    colR= 255;
    
        imageMode(CENTER);
    image(img, width/2, height/2, 200, 200);
  rect(rectX,rectY,rectSize,rectSize);
  
   
    }
}