var circles;
var mouse;

x = 0;
y = 0;

var color1;
var color2;
var color3;
var color4;

function setup() {
mouse = createVector(mouseX, mouseY);
createCanvas(windowWidth, windowHeight);
MnowPos = createVector(500, 500);
Macc = createVector(2, -2);    

}

function draw() {

background(random(10, 80), 220);

col = {
r: 10,
g: 10,
b: 10
};
spot = {
x: 0,
y: 0
}

color1 = map(mouseX, 0, windowWidth, (255, 0, 0), (100, 0, 0));
color2 = map(mouseX, 0, windowWidth, (0, 255, 0), (0, 100, 0));
color3 = map(mouseY, 0, windowHeight, (0, 255, 0), (0,100, 0));
color4 = map(mouseY, 0, windowHeight, (0, 0, 255), (0, 0, 100));

col.r = random(100, 255);
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
    
}

