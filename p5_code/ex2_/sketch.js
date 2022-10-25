let gSize = 50;
let b;
let b2;
let bc;
let value=100;


function setup() {
 createCanvas(800, 800);
 rectMode(CENTER);
   bc = color('#5C1389');

 noStroke();

 b = loadImage("images/eye_bw.jpg");
 b2 = loadImage("images/eye_color.jpg");
}

function draw() {
  background(255-value);
  fill(value);
  ellipse(width/2, height/2, 200, 200);
  //rect(200, 200, 50, 50);

 if (!mouseIsPressed) {
   noTint();
   image(b, 0, 0, width/2, height/2);
   image(b2, width/2, height/2, width/2, height/2);
 } else {
  //  tint(255, 126); // Apply transparency without changing color
   let checkCounter = 0;

   for ( let i = 0; i < height; i+= gSize) {

     // add extra count to make it offset in the next row
     checkCounter++;

     for ( let j = 0; j < width; j+=(gSize) ) {
          // mod operator  %
       if ( (checkCounter % 2) == 0 ) {
         image(b2, j, i, gSize, gSize);
       } else {

         image(b, j, i, gSize, gSize);
       }
       checkCounter++;
     }
   }
 }
 }

 function keyPressed() {

  if ( key == '1' || key == 'A' || key == 'a') {
    // example of toggle logic
    if (value == 150) {
      value = 255;
    } else {
      value = 150;
    }
  }
}
