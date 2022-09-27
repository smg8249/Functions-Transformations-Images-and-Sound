var music;
var gorillaz;

function preload(){
  music = loadSound("feelGoodInc.mp3");
  gorillaz = loadImage("gorillazTransparent.png");
}

function setup() {
  createCanvas(400, 400);
  background(219,226,233);
  
}


function draw() {
   noStroke();
  bandMembers();
  
  
}

function bandMembers(){
 push();
  translate(width/2, height/2); 
  imageMode(CENTER);
  image(gorillaz, 0,0, gorillaz.width/3, gorillaz.height/3);
pop();
}


function keyPressed(){
  if(keyCode === ENTER){
  background (219,226,233);
  } 
}

function mouseDragged() {
  if(keyCode === 81){
  fill(0, 111, 255);
} else if(keyCode === 87){
  fill(19, 244, 239);
} else if(keyCode === 69){
  fill(104, 255, 0);
} else if(keyCode === 82){
  fill(250, 255, 0);
}else if(keyCode === 84){
  fill(255, 191, 0);
}else if(keyCode === 89){
  fill(255, 0, 92);
}
 ellipse(mouseX, mouseY, 20);

if(mouseY < height/2){
  ellipse(mouseX, mouseY, 20);
}
}

function keyPressed(){
  if(keyCode === 32){
  music.play();
  } 
}