var circles=[];
var mouse[];



var color1 = [100,255,146];
var color2 = [200,155,146];
var color3 = [200,170,100];
var color4 = [100,105,160];

var x = 0;
var y= 0;

function setup() {
mouse = createVector(mouseX, mouseY);
createCanvas(windowWidth, windowHeight);
MnowPos = createVector(500, 500);
Macc = createVector(2, -2);    

}

function draw() {
 framerate(50);

background(random(110, 80), 220);

    col = {
r: 10,
g: 10,
b: 10,
}

spot = {
x: 0,
y: 0
}

color1 = map(mouseX, 0, windowWidth, (255, 0, 0), (100, 0, 10));
color2 = map(mouseX, 0, windowWidth, (0, 255, 0), (0, 200, 0));
color3 = map(mouseY, 0, windowHeight, (0, 255, 0), (0,100, 0));
color4 = map(mouseY, 0, windowHeight, (200, 0, 255), (0, 100, 100));

col.r = random(10, 255);
col.g = random(0, 255);
col.b = random(100, 255);
spot.x = random(0, width);
spot.y = random(0, height);

var red = map(mouseX, 0, width, 100, 255);
var green = map(mouseX – mouseY, 0, 100, 255);
var blue = map(mouseY, 0, height, 100, 255);

var diffx = mouseX – x;
var diffy = mouseY – y;

strokeWeight (10);
stroke(10,30, 80);
    
mouse.set(mouseX, mouseY)
for (var i = 0; i < circles.length; i++) {
circles[i].update();
circles[i].draw();

if (circles.length < 500) {
MnowPos.set(mouse);
MnowPos.add(random(-10, 10), random(-10, 10));
var mLoc = int(map(mouseX, 0, width, 0, 4));
if (mLoc == 0) {
circles[i] = new Circles(MnowPos, Macc, colorA);
} else if (mLoc == 1) {
circles[i] = new Circles(MnowPos, Macc, colorB);
} else if (mLoc == 2) {
circles[i] = new Circles(MnowPos, Macc, colorC);
} else if (mLoc == 3) {
circles[i] = new Circles(MnowPos, Macc, colorD);
}
}
for (var j = 0; j < circles.length; j++) {
if (circles[j].nowPos.x >= width – 10 || circles[j].nowPos.x <= 10 || circlescles[j].nowPos.y >= height – 10 || particles[j].nowPos.y <= 10 || circles[j].lifeCount <= 0) {
circles.splice(j, 1);

}
}
}



fill(col.r, col.g, col.b);
ellipse(spot.x, spot.y, random(0, 30), random(0, 30));
    
}

