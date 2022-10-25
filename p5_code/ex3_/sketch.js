let counter = 0;

function setup() {
  createCanvas(500,500);
  background(30,20,30);
  angleMode(DEGREES);
}

function draw() {
  background(120,130,180);

  guy1(color(50,200,140), 330,210 ); //green

  guy1(color(180,120,190), 90,170 ); //pink

  guy1(color(60,70,20), 209,160 ); //dark green

  guy1(color(190,230,100), 150,310 ); //yellow

}


function guy1(k,lx,ly) {

 push();
 translate(lx,ly);
 rotate(random(15,10));

  body(k);
  head(k);
  arm(k,-55,22); // left arm
  arm(k,35,22); // right arm
  leg(k,-11,68); //  left leg
  leg(k,15,80); //  right leg
  // tail();
  pop();

}


function body(k){
  fill(k);
  rect(0,0,40,90, 15,15,25,25);
}

function head(k){
fill(k);

rect(-2,-23,45,45,4);
fill(101,220,10,);
ellipse(11,-12,10,10);
ellipse(32,-12,12,13);
fill(130);
rect(18,-5,11,6,5);
}

function arm(k,lx,ly){
fill(k);
rect(lx,ly,56,12,6);

}

function leg(k,lx,ly){
fill(k);
// rect(lx,ly,40,10,30,);
rect(lx,ly,14,22,3);

}
