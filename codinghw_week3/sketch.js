 var x;
function setup(){
    
    createCanvas(800,600);
//   x = width/2;
}

function draw(){
    
    
    
    background(150,120,100);
//    x = 5;
//    line(x, 0, x, height);
//    x += 5;
//    line(x, 0, x, height);
//     x = x + 5;
//    line(x, 0, x, height);
//     x = x + 5;
//    line(x, 0, x, height);
    noFill();
    for(var i = 50; i<=width; i+=100){
        for(var j = 5; j < height; j+=50){
        
       
//        line(i,0, i, height);
        ellipse(i, j, 200, 200);
            fill(200,100,50);
    }
}
}