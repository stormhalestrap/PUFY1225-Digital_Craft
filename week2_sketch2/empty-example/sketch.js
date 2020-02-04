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
  rect(xPos, yPos, 17890000, 1000);
  }
  
  rect(mouseX, mouseY, 70,70);
    fill("1569C7");
  rect(mouseX, mouseY, 65,65);
   fill("#0000A0");
  rect(mouseX, mouseY, 60,60);
  fill("blue")
  rect(mouseX, mouseY, 55,55);
  fill("1569C7");
  rect(mouseX, mouseY, 50,50);
  fill("#0000A0");
  rect(mouseX, mouseY, 45,45);
  rect(mouseX, mouseY, 40,40);
  rect(mouseX, mouseY, 35,35);
  rect(mouseX, mouseY, 30,30);
  rect(mouseX, mouseY, 25,25);
  rect(mouseX, mouseY, 20,20);
  rect(mouseX, mouseY, 15,15);
  rect(mouseX, mouseY, 10,10);
  rect(mouseX, mouseY, 5,5);
  rect(mouseX, mouseY, 0,0);
  
}

