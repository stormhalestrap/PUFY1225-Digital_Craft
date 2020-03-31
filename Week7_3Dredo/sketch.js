function setup() {
  createCanvas(400, 400, WEBGL);
}


function draw() {
  background(20);
  rotateY(frameCount * 0.01);
   translate(100, 100);
  translate(50, 30);
  rotateX(frameCount * 0.01);
  //right leg
  pointLight(255, 0, 0, 10, 10, 100);
  pointLight(0, 0, 225, 10, 100, 10);
  pointLight(0, 225, 0, 100, 10, 10);
  translate(10, 0, 50);
  torus(20, 30);
  translate(10, 0, 50);
  torus(30, 30);
  translate(10, 0, 50);
  torus(40, 40);
  //left leg
  noStroke();
  translate(10, 95, -90);
  torus(20, 30);
  translate(10, 0, 50);
  torus(30, 30);
  translate(10, 0, 50);
  torus(40, 40);
  //belly
  translate(10, -50, 20);
  torus(30, 30);
  translate(10, 0, 50);
  torus(50, 70);
  translate(10, 0, 50);
  torus(50, 50);
  translate(10, 0, 70);
  torus(30, 30);
  
  //right arm
  push();
  translate(90, 100, -50);
  torus(20, 40);
  translate(5, 100, 10);
  torus(20, 30);
  pop();
  
  //left arm
  push();
  translate(-90, -100, -50);
  torus(20, 40);
  translate(-5, -100, -10);
  torus(20, 30);
  pop();
  //hat
  //translate(10, -20, 50);
  //torus(20, 20, 200);
  //translate(10,-20, 50);
  //cylinder(110, 220, 20);
  
 
}

