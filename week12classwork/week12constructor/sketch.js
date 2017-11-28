function Ball () {
    
 this.x = random(190, width);
this.y = random(190, height);
    this.speed = 20;
    this.speedY = 30;
    
    
    
    this.bounce = function(){
        if(this.x > width || this.y < 0){
        this.speed = this.speed * -1;
    }
    if(this.y > height || this.y < 0){
        this.speedY = this.speedY * -1;
    }
        
    }
    
    this.move = function(){
        this.x = this.x + this.speed;
    this.y = this.y + this.speedY;
        
        
        
    }
    
    this.drawBall = function(){
        
        fill(255);
        ellipse(this.x, this.y, this.speed, this.speedY);
        
    
        
        
        
    }
}
    
    var balls =[];
 function setup(){
        
   createCanvas(windowWidth, windowHeight);
        
    for(var i=0; i<400; i++){
        balls[i]= new Ball();
       
    }
    }


  function draw(){
        
    background(100,150,250);
      for(var i=0; i< balls.length;i++){
          
        
        balls[i].drawBall();
        balls[i].bounce();
        balls[i].move();
        
        
        
    }
  }
      
   
    
    
        
        
    
    
    
    
    
    
    
    
    
    
    
    
    
    

