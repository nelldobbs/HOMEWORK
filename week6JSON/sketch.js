
var state = 3;
var rect1 = {
    x : 100,
    y : 100,
    size : 100,
    rectTop = y,
    rectBottom = y + size,
    rectLeft = x,
    rectRight = x + size
};
//var rectX = 100;
//var rectY = 100;
//var rectSize = 100;



function setup(){
    createCanvas(windowWidth, windowHeight);
    
   
//    var rectTop = rectY;
//    var rectBottom = rectY + rectSize;
//    var rectLeft = rectX;
//    var rectRight = rectX + rectSize;
//}
    rect(rect1.x, rect1.y, rect1.size);
}


function draw(){
    background(200);
    rect1.x = rect1.x + 1;
    
  
    if(mouseX > x && mouseX < x + size && mouseY > y && mouseY < y + size){
       
        colR = 4;   
    }else{
        colR = 255;   
    }
        fill(colR, 10, 100);
        // But the variables below do need some help/changing
        rect(x, y, size, size);   
}