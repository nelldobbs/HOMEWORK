var rectX = 200;
var rectY = 100;
var rectSize = 300;
var rectTop = rectY;
var rectBottom = rectY + rectSize;
var rectLeft = rectX;
var rectRight = rectX + rectSize;


var index = 0;

var state = 0;

var s0 = 0;
var s1 = 0;
var s2 = 0;
var s3 = 0;

var watchFont; 

function preload(){
    
  watchFont = loadFont("Watchword.otf");  
    
    
}
 function setup (){
    createCanvas(windowWidth, windowHeight); 
//    circX = windowWidth / 2;
//    circY = windowHeight / 2;
    textFont(watchFont);
    textSize(30);
//    button = createButton("xanax");
//    button.position(19, 19);
//    button.mousePressed(changeBG);
//   
 }

function draw(){
  
   background(250);
    fill (105);
    noStroke();
//   fill(colR, 10, 100);
//        rect(rectX, rectY, rectSize, rectSize);
    
    
    noStroke();

    
//    SHROOMS
    fill(200,10,260);

    rect(250, 100, 200,200);
     
    
    fill (250);
    textSize(32);
    text("SHROOMS", 250, 100, 200,200);
       
    
//  XANAX  
    
    fill(140, 90, 180, 80);
    rect(550, 100, 200,200);
    
     fill (200,90,210);
     textSize(32);
    
    text("XANAX",550, 100,200,200);
    
//    ECSTACY
    
        fill(220, 60, 120);

    rect(850, 100, 200,200);
    
     fill (250);
     textSize(32);
    
    text("ECSTASY", 850, 100,200,200);
    
    
    
//    CHOOSE A DRUG
    
    
    fill (200,100,140);
    
    

    text("CHOOSE A DRUG",mouseX, mouseY, 550,600);

  
    
//    if(mouseX > rectLeft && mouseX < rectRight && mouseY > rectTop && mouseY < rectBottom){
//        
  

 

}


//function mousePressed(){
//    if(mouseX > rectLeft && mouseX < rectRight && mouseY > rectTop && mouseY < rectBottom && buttonClicked==false){
//        colR = 0;
//        buttonClicked = !buttonClicked;
//    }else if (mouseX > rectLeft && mouseX < rectRight && mouseY > rectTop && mouseY < rectBottom && buttonClicked==true){
//        colR = 255; 
//        buttonClicked = !buttonClicked;
//    }
    


//}

    
    
    
 


        