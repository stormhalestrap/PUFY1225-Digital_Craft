var array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
var i=0

let timer = 100

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(200);
  for(var i=0; i<width;i++)
  {
    
   ellipse(i,i, random(500,50), random(50,50),random(50,50));
    textAlign(CENTER, CENTER);
    textSize(200);
    text(timer, width/2, height/2);
    
  if (frameCount % 60 == 0 && timer > 90,80,70) {
    timer --;
  }
    
    
    
  }
}