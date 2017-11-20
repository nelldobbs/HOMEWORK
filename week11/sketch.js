var order = ["Ok","Good","Bad"];

var ok1 = [108,255,146];
var good1 = [158,200,54,200];
var bad1 = [153,204,28,41];

var ok2 = [228,30,216,220];
var good2 = [95,157,25,114];
var bad2 = [88,205,0,9];

var tick = 0;

function setup(){
    createCanvas(1080, 720);
}

function draw (){
    background(100, 202, 40);
    
    fill(0);
    textSize(30);
    text("Press on orb to guess your mood!",117,100);
    
    fill(ok1[tick],good1[tick],bad1[tick]);
    textSize(38);
    textAlign(RIGHT);
    text(order[tick],770,180);
    
    noStroke();
    textAlign(LEFT);
    

    
    fill(ok1[tick], good1[tick], bad1[tick]);
    ellipse(width/2,height/2,400,400);
   
    
}

function mousePressed() {
    
    tick = tick + 1;
    
    if(tick == order.length){
        tick = 0;
    }
}

