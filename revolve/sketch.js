var counter = 1;
var speed= 1;

var img1;

var img2;

var img3;
    
    


function preload(){
    img1 = loadImage ("man-1043471_960_720.png");
    img2 = loadImage ("med-roast-beef_web_new_r4.png");
    img3 = loadImage ("580b57fbd9996e24bc43bbcf.png");

}

function setup() {
 createCanvas(windowWidth,windowHeight);
    
    
    
}
   
    function draw(){
    background(20);
        imageMode (CENTER);
       
  image(img1, 200, 300, 400, 400);
        
          push();
        imageMode (CENTER);
    translate(100,200);
    rotate(radians(counter));
 image(img2, 100, 200, 100, 100);
        pop();
        
        push();
        imageMode (CENTER);
        translate(50, 100);
        rotate(radians(counter));
image(img3,100, 300, 200, 200);
        pop();
        
        counter+= speed;
 
        
    }

