var img1 = {
 
    loc: 0,
    size: 400,
    x: 200,
    y: 100,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
    
    
};
var img2 = {
 
    loc: 0,
    size: 400,
    x: 500,
    y: 300,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
    
    
};

var img3 = {
 
    loc: 0,
    size: 300,
    x: 800,
    y: 200,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
    
    
};


var scary;

var chainsaw;

var creepy;

//var img;
//var imageSize;
//
//var imgX = 200;
//var imgY = 100;
//var imgSize = 400;
//
//var imgLeft;
//var imgTop;
//var imgRight;
//var imgBottom;

var col = 000;

function preload(){
    img1.loc = loadImage("hellraiser-iii-pinhead.png");
    scary = loadSound("creepy-background-daniel_simon.mp3");
    img2.loc= loadImage("Leatherface.png");
    chainsaw = loadSound("Chainsaw+2.mp3");
    img3.loc = loadImage("mask_beetlejuice_dark_2.png");
    creepy = loadSound("howler-monkeys-daniel_simon.mp3");
    
}

function setup(){
    createCanvas(windowWidth,windowHeight);
//    imageSize = 400;
    
    

}

function draw(){
    background(col);
    image(img1.loc, img1.x, img1.y, img1.size, img1.size);
    image(img2.loc, img2.x, img2.y, img2.size, img2.size);
     image(img3.loc, img3.x, img3.y, img3.size, img3.size);


    
}

function mousePressed(){
    img1.top = img1.y;
    img1.left = img1.x;
    img1.right = img1.x + img1.size;
    img1.bottom = img1.y + img1.size;
    
   
    
    img2.top = img2.y;
    img2.left = img2.x;
    img2.right = img2.x + img2.size;
    img2.bottom = img2.y + img2.size;
    
    img3.top = img3.y;
    img3.left = img3.x;
    img3.right = img3.x + img3.size;
    img3.bottom = img3.y + img3.size;
    
     
    
    if (mouseX > img1.left && mouseX < img1.right && mouseY > img1.top && mouseY < img1.bottom){
        col = 000;
    scary.play();
   
}
      if (mouseX > img2.left && mouseX < img2.right && mouseY > img2.top && mouseY < img2.bottom){
       col= 255;
   chainsaw.play();
   
}
    
   
      if (mouseX > img3.left && mouseX < img3.right && mouseY > img3.top && mouseY < img3.bottom){
        col = 000;
   creepy.play();
   
}
}
