 var isPink = false;

function setup(){
    createCanvas(windowWidth, windowHeight);
    
    
    
     background(200);
    
}
function draw(){
   
    
   
    fill(255,255,255);
    noStroke();
    ellipse(100, 220, 150, 100 );
        
    
    
    fill(255,255,255);
    noStroke();
    ellipse(350, 220, 150, 100 );
    
     if(isPink == false){
    fill(100,80,150)
    noStroke();
    ellipse(350,220,100,100);
     }else{
     fill(255,105,180)
    noStroke();
    ellipse(350,220,100,100);
     }
     fill(100,80,150)
    noStroke();
    ellipse(100,220,100,100);
    
     fill(0,0,0)
    noStroke();
    ellipse(100,220,50,50);
     
    fill(0,0,0)
    noStroke();
    ellipse(350,220,50,50);
    
    
    
    }
function mousePressed(){
        
    isPink = !isPink;    
        
        
    }

    
