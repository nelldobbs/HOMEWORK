var sound;
var typoFont; 
var balls = [];



function setup(){
    createCanvas(windowWidth, windowHeight);
    
    textFont(typoFont);
     textSize(40);
}
function preload(){
    
 sound = loadSound("FlaminHotCheetos.mp3");
    
    typoFont = loadFont("TypoGrotesk.otf"); 
}

function mousePressed(){
    
    balls.push(new Ball(mouseX, mouseY))
    balls.push(new Ball(mouseX, mouseY))
    balls.push(new Ball(mouseX, mouseY))
     balls.push(new Ball(mouseX, mouseY))
     balls.push(new Ball(mouseX, mouseY))
     balls.push(new Ball(mouseX, mouseY))
     balls.push(new Ball(mouseX, mouseY))
     balls.push(new Ball(mouseX, mouseY))
     balls.push(new Ball(mouseX, mouseY))
     balls.push(new Ball(mouseX, mouseY))
     balls.push(new Ball(mouseX, mouseY))
     balls.push(new Ball(mouseX, mouseY))
    balls.push(new Ball(mouseX, mouseY))
    balls.push(new Ball(mouseX, mouseY))
    balls.push(new Ball(mouseX, mouseY))
    balls.push(new Ball(mouseX, mouseY))
    balls.push(new Ball(mouseX, mouseY))
    balls.push(new Ball(mouseX, mouseY))
    balls.push(new Ball(mouseX, mouseY))
    balls.push(new Ball(mouseX, mouseY))
    balls.push(new Ball(mouseX, mouseY));
    
          
    sound.play();  
}
                        
function draw(){
    background (255);
    
    fill(140,190,155,80);
      text("press and enjoy", mouseX, mouseY, 500, 500);    
    for(var i = 0; i < balls.length; i++){
        balls[i].drawBall();
        balls[i].bounce();
        balls[i].moveBall();
        
   
        
    }
    
    if (balls.length > 1000){
        
        balls.splice(100, 10);
        }
    
}


function Ball(x,y){
    this.x = x;
    this.y = y;
    this.size = 25;
    this.speed = random(1);
    this.speedY = random(1);
    this.drawBall = function(){
     fill(random(140), random(190), 155, random(80)) ;
        random()
     noStroke();
     rect(this.x, this.y, this.size, this.size);
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

