xRad = 15;
yRad = 15;

function setup() {
  createCanvas(400, 400);
}

function draw()  {
  background(220);
  
  for(var x=xRad/2; x < width; x+=xRad){
    for(var y=yRad/2; y < height; y+=yRad){
      fill("pink");
      ellipse(x, y, xRad, yRad);
      
      strokeWeight(1.5)
      ellipse(x, 15, 10, 10);
      ellipse(x, y, 20, 20);
      ellipse(x, 50, 10, 10);
      ellipse(x, 90, 10, 10);strokeWeight(2.8);
      ellipse(x, 125, 10, 10);strokeWeight(4);
      ellipse(x, 165, 10, 10);strokeWeight(5.4);
      ellipse(x, 200, 10, 10);strokeWeight(7);
      ellipse(x, 240, 10, 10);
      ellipse(x, 275, 10, 10);fill("black");
      ellipse(x, 315, 10, 10);
      ellipse(x, 350, 10, 10);fill("black");
      ellipse(x, 388, 10, 10);
      fill("black");
      strokeWeight(1)
    
      fill("blue");
    }
  }

  //for (var x2 = 0; x2 < width+25; x2+=xRad){
    //fill("blue");
    //ellipse(x2, xRad/2, xRad, yRad);
  //}
  
}