 let t = 0; // time variable

function setup() {
  createCanvas(600, 600);
  noStroke();
  
  fill(300, 400, 300);
    
  
}
function draw() {
  background(10, 10); // translucent background (creates trails)
  fill(34, 139, 34);
  stroke(10); 
  //big circle
ellipse(280, 260, 300);
  //cirlce on strands
  noStroke();
  ellipse(450, 140, 50);
  ellipse(480, 260, 50);
  ellipse(120, 360, 50);
  ellipse(140, 100, 50);
  ellipse(290, 70, 50);
  ellipse(90, 220, 50);
  ellipse(250, 450, 50);
  ellipse(430, 410, 50);
  
  //mouth
  noStroke();
    fill(204, 130, 135)
  ellipse(280, 290, 150, 80)
  fill(204, 130, 135)
  //triangle(400, 270, 300, 330, 270, 250);
  
  //strands attached to little balls
  fill(25, 140, 34);
  triangle(180, 190, 135, 100, 220, 150);
  triangle(190, 270, 100, 220, 150, 190);//point, right point,left point, ..., direction on point,makes top point longer 
  triangle(500, 270, 400, 270, 390, 190);
  triangle(430, 420, 400, 350, 350, 390);
   triangle(460, 120, 350, 200, 400, 200);//thin one top right
   triangle(315, 120, 230, 260, 290, 50);
  triangle(110, 360, 235, 350, 180, 290);
  triangle(250, 460, 275, 390, 200, 380);
  
 
  //eyes 
  fill(225, 10, 15);
  ellipse(340, 200, 10, 25)//little eye circles 
  ellipse(230, 200, 10, 25)
  fill(0, 0, 0);
  ellipse(230, 200, 40, 40);
  ellipse(340, 200, 40, 40);
  fill(225, 225, 225);
  ellipse(340, 190, 10, 10)
   ellipse(230, 190, 10, 10)
 
  //colour of little balls 
 fill(25, 90, 50);

  stroke(10);

    //fill(34, 139, 34);get rid if want purple little circles
  
  // make a x and y grid of ellipses
  for (let x = 0; x <= width; x = x + 35) {
    for (let y = 0; y <= height; y = y + 35) {
      // starting point of each circle depends on mouse position
      const xAngle = map(mouseX, 0, width, -5 * PI, 4 * PI, true);
      const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
      // and also varies based on the particle's location
      const angle = xAngle * (x / width) + yAngle * (y / height);

      // each particle moves in a circle
      const myX = x + 100 * cos(2 * PI * t + angle);
      const myY = y + 100 * sin(2 * PI * t + angle);

      ellipse(myX, myY, 5); 
      ellipse(myX, myY, 10); 
      ellipse(myX, myY, 7);// draw particle(thickness)
    }
  }

  t = t + 0.01; // update time
}

