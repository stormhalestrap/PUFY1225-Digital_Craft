var xPos = 1;
var yPos = 1;
var velocity = 2;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  //background(220);
  xPos = xPos + 10;
  yPos = yPos + 10;
  fill("#1569C7");
  fill("#1569C7");
  if (yPos >= 200){
    yPos = 0;
    fill("#0000A0");
    rect(xPos, yPos, 100, 50);
  }
  ellipse(mouseX, mouseY, 40, 40);
  fill("1569C7");
  rect(mouseX, mouseY, 40,40);
}