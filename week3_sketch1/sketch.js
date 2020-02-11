var odds;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  //line(20,40, 60, 80);
  //line(20,40, 60, 80);
  //line(20,40, 60, 80);
  //line(20,40, 60, 80);
  //line(20,40, 60, 80);
  //line(20,40, 60, 80);
  //line(20,40, 60, 80);
  //line(20,40, 60, 80);
  
  for(var i= 10; i < width; i+=7){
    odds= i%3
    if (odds ==0){
      strokeWeight(1);
    }else{
      strokeWeight(1);
    }
    //line(beginning x, beginning y, ending x, ending y);
  
    line(10 + i, 1180, i, 20);
    line(i, 1200, 40+i, 160);
    line(400, 20+i, 80, 180);
    line(400, 300, 40+i, 150);
    line(300 + 10, 800, i, 1);
    line(300 + 10, 18, i, 120);
    line(800 + 900, 900+i, 100);
    line(10000 + 2000+i, 8000, 190);
    line(0 + i, 1180, i, 10);
    line(-100 + -100, 1180, 30, -250);
    
    
}
  
  for(var j = 0; j <=10; j++){
    print(j);
  }
    
  
  
}




