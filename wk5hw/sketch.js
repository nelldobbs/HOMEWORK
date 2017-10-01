var antonFont; 
var img;
function preload(){
    
  antonFont = loadFont("Anton.ttf");  
     img = loadImage("burger.png"); 
    
}
 function setup (){
    createCanvas(windowWidth, windowHeight); 
//     textFont("antonFont");
     textFont(antonFont);
     textSize(60);
   
 }

function draw(){
  
   background(100,200,260);
   text("Ooowee, now that's a good looking burger!", mouseX, mouseY);

    imageMode(CENTER);
    image(img, width/2, height/2, 600, 300);
    
    }


        

    