let rand = 0;
let gridName = "Purple Dream";

function setup() {
  createCanvas(700, 700);
  background(120,0,200);
  smooth();
  let a = 0.0;
  let inc = TWO_PI/25.0;
  console.log(" The inc = " + inc);
  stroke(260);
  fill(2,300,0);
  frameRate(15);
  textSize(20);
  textAlign(CENTER);



  for (let i=2; i < width; i+=5) {
   if (i<35){}
    line(i, 40, i, 50 + sin(a)*90.0);
    console.log(" The angle = " + a + "The sin = " + sin(a));
    a = a + inc;

  }
   for (let i=7; i < width; i+=5) {
   if (i<8){
      line(i, 100, i, 100 + sin(a)*10.0);
   } else{
          line(i, 200, i, 200 + sin(a)*50.0);
   }

    console.log(" The angle = " + a + "The sin = " + sin(a));
    a = a + inc;

  }

  for (let i=2; i < width; i+=5) {
   if (i<35){}
    line(i, 400, i, 500 + sin(a)*-200.0);
    console.log(" The angle = " + a + "The sin = " + sin(a));
    a = a + inc;

  }

}

function draw() {
  for (let i = 0; i < 700; i += 18) {
    for (let j = 0; j < 300; j += 22) {
      rand = random(i);
      fill(90,rand,50);
      rect( i+6,rand,10,10);


       fill(90,rand,200);
      rect( mouseX, mouseY,50,15);
      //console.log(gridName + ", now has a fill value of " + rand);
    }
  }

}
