var sound;
var trashFont; 
var balls = [];


function setup(){
    createCanvas(windowWidth, windowHeight);
     textFont(trashFont);
     textSize(40);
}

function preload(){
    
  sound = loadSound("Pineapple.mp3");
    
   trashFont = loadFont("TrashHand.TTF"); 
}

function mouseDragged(){
    
    balls.push(new Ball(mouseX, mouseY));
    
   
    
}

function mousePressed(){
    
    
  sound.play();  
    
}



function draw(){
    background(random(220), random(60), random(120));
    
     text("press and drag for partytime", mouseX, mouseY, 500, 500); 
    for(var i = 0; i < balls.length; i++){
        balls[i].drawBall();
        balls[i].bounce();
        balls[i].moveBall();
      
     
       
        
    }
    
    if (balls.length > 1000){
        
        balls.splice(0, 5);
        }
    
}


function Ball(x,y){
    this.x = x;
    this.y = y;
    this.size = random(90);
    this.speed = random(515);
    this.speedY = random();
    this.drawBall = function(){
     fill(255, random(70));
     noStroke();
     ellipse(this.x, this.y, this.size, this.size);
}
    this.bounce = function(){
      if(this.x > width || this.x < 0){
        this.speed = this.speed * -1;
    }
    if(this.y > height || this.y < 0){
        this.speedY = this.speedY * -1;
    }}
    
    this.moveBall = function(){
        this.x = this.x + this.speed;
        this.y = this.y + this.speedY;
    }
}


