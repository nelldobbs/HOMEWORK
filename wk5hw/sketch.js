var circX;
var circY;
var circDiameter = 450;
var circRadius = circDiameter / 2;
var d;
var redCol = 200;
var img;
var antonFont; 
var img;
var isClicked = false;

function preload(){
    
  antonFont = loadFont("Anton.ttf");  
     img = loadImage("burger.png"); 
    
}
 function setup (){
    createCanvas(windowWidth, windowHeight); 
circX = windowWidth / 2;
    circY = windowHeight / 2;
     textFont(antonFont);
     textSize(60);
   
 }

function draw(){
  
   background(redCol,10,260);
    fill (105);
    noStroke();
    ellipse(circX, circY, circDiameter, circDiameter);
    d = dist(circX, circY, mouseX, mouseY);
    if (d < circRadius) {
        redCol = 0;
        fill(100, 150, 200);
        text("MMMMMMmmm, that was a good burger.", mouseX, mouseY, 300, 800);
    } else {
        redCol = 200;
           imageMode(CENTER);
    image(img, width/2, height/2, 200, 200);
            text("Ooowee, now that's a good looking burger!", mouseX, mouseY, 300, 800);
    }
    
}

function mousePressed() {
    if (d < circRadius) {
        redCol = 0;
    } else {
        redCol = 200;
    }
    


}

    
    
    
 


        

    