function setup() {
  createCanvas(windowHeight, windowHeight);
  background('black');
}


function draw(){
  fill('red');
  frameRate(2);
  let change = random([1,2,3]);
  //red
  noStroke();
  if (change === 1) {
    fill('red');
  }
  if (change === 2) {
    fill('yellow');
  }
  if (change === 3) {
    fill(50,50,240);
  }
  
  quad(0,0,((windowHeight/30)*13),0,((windowHeight/30)*13),((windowHeight/20)*7),0,((windowHeight/20)*7));

  //yellow
  if (change === 1) {
    fill('yellow');
  }
  if (change === 2) {
    fill(50,50,240);
  }
  if (change === 3) {
    fill('red');
  }
  quad(0,((windowHeight/30)*19),(windowHeight/11),((windowHeight/30)*19),(windowHeight/11),(windowHeight),0,(windowHeight));

  //blue
  if (change === 1) {
    fill(50,50,240);
  }
  if (change === 2) {
    fill('red');
  }
  if (change === 3) {
    fill('yellow');
  }
  quad(((windowHeight/50)*22.5),((windowHeight/30)*19),((windowHeight/50)*39.2),((windowHeight/30)*19),((windowHeight/50)*39.2),((windowHeight/50)*46),((windowHeight/50)*22.5),((windowHeight/50)*46));

  //"white"
  fill(240,240,240);
  quad(0,((windowHeight/50)*18.6),((windowHeight/30)*13),((windowHeight/50)*18.6),((windowHeight/30)*13),((windowHeight/50)*30.35),0,((windowHeight/50)*30.35));
  quad(((windowHeight/50)*22.5),0,(windowHeight),0,(windowHeight),((windowHeight/20)*7),((windowHeight/50)*22.5),((windowHeight/20)*7));
  quad(((windowHeight/50)*22.5),((windowHeight/50)*18.6),(windowHeight),((windowHeight/50)*18.6),(windowHeight),((windowHeight/50)*30.35),((windowHeight/50)*22.5),((windowHeight/50)*30.35));
  quad(((windowHeight/50)*5.3),((windowHeight/30)*19),((windowHeight/30)*13),((windowHeight/30)*19),((windowHeight/30)*13),(windowHeight),((windowHeight/50)*5.3),(windowHeight));
  quad(((windowHeight/50)*22.5),((windowHeight/50)*47),((windowHeight/50)*39.2),((windowHeight/50)*47),((windowHeight/50)*39.2),(windowHeight),((windowHeight/50)*22.5),(windowHeight));
  quad(((windowHeight/50)*40),((windowHeight/30)*19),(windowHeight),((windowHeight/30)*19),(windowHeight),(windowHeight),((windowHeight/50)*40),(windowHeight));

  //text
  stroke('black');
  fill('black');
  text(change, 50, 50);
}

function windowResized() {
  resizeCanvas(windowHeight, windowHeight);
  background('black');
}
