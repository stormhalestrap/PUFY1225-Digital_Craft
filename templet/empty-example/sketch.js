function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("");
  //ellipse(x position, y position, width, height);
  noStroke(); 
  
  stroke(6);
  rectMode(CENTER);
  rect(160, 230, 100, 50);
  fill("red")
  rect(150, 150, 120, 120);
  strokeWeight(6);
  fill("white");
  rect(50, 50, 100, 50); 
  fill("white");
  rect(250, 160, 50, 100);
  fill("blue");
  rect(290, 320, 140, 70);
  fill("white");
  rect(290, 250, 140, 50);
  fill("red");
  
}