var ball = {
    x : 0,
    y : 0,
    speed : 10,
    speedY : 10,

    bounce:function(){
        if(this.x > width || this.y < 0){
        this.speed = this.speed * -1;
    }
    if(this.y > height || this.y < 0){
        this.speedY = this.speedY * -1;
    }
    },
    


   move:function(){
    this.x = this.x + this.speed;
    this.y = this.y + this.speedY;
},
    
 drawBall:function(){
     
     ellipse(this.x, this.y, 100, 100);
 }
}




function setup(){
    
     createCanvas(windowWidth, windowHeight);
    

   
    }

function draw(){
    
    background(255,10,180);
    
    ball.bounce();
    ball.move();
    ball.drawBall();
    
}
