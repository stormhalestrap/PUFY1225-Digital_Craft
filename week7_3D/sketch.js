function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(220);
  rectMode(CENTER);
  rotateY(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  translate(0, 0);
  torus(30, 60);
  torus(50, 1000);
  ambientMaterial(67,98);
  
   
}
