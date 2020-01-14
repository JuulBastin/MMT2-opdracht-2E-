function setup() {
  // put setup code here
  createCanvas(400, 400);
  background(240);
}

function draw() {
  // put drawing code here\
  // vulling
  strokeWeight(0);
  fill(200,0,0)
  rect(0, 0, 190, 160);
  fill(220, 170, 0);
  rect(0, 265, 60, 135);
  fill(0, 0, 100);
  rect(190, 265, 120, 115);
  // dunne lijnen
  strokeWeight(5);
  line(190, 0, 190, 400);
  line(60, 265, 60, 400);
  line(310, 265, 310, 400);
  line(190, 380, 310, 380);
// dikke lijnen
  strokeWeight(8);
  line(0, 265, 400, 265);
  line(0, 160, 400, 160);
}