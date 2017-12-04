
var sound;
var chinFont;
var balls = [];


function setup(){
    createCanvas(windowWidth, windowHeight);
    textFont("chinese_rocks.ttf");
    textSize(140);
}

function preload(){
    
    
    sound = loadSound("CrazyFrog.mp3");
    chinFont = loadFont("chinese_rocks.ttf");
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
    background (50,200,100);

  textSize(60);  
text("click and drag to get weird", mouseX, mouseY, 500, 500);
    for(var i = 0; i < balls.length; i++){
        balls[i].drawBall();
        balls[i].bounce();
        balls[i].moveBall();
        
        
    }
    
    if (balls.length > 1000){
        
        balls.splice(2000, 1000);
        }
    
}


function Ball(x,y){
    this.x = x;
    this.y = y;
    this.size = 225;
    this.speed = random(100);
    this.speedY = random(100);
    this.drawBall = function(){
     fill(random(240), random(120), 155) ;
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


