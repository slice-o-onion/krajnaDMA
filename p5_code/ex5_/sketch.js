function setup() {
  createCanvas(500,500);
  background(20);
  fill(255);
  frameRate(30);
  // 30 frames   times 10
  console.log(frameCount);
}

function draw() {
       //  start as true until 99
    if (frameCount < 150 ) {
      console.log("the first act");
      fill(0,255,0);
      ellipse(width/2,height/3,80,80);
    // true between 100 and 199
    }
    else if ( frameCount < 300) {
       console.log("the second act");
       fill(255,255,0);
       ellipse(width/2,height/3,80,80);
       // true once it reaches frame 300
    } else  {
       console.log("the third act");
       fill(255,0,0);
       ellipse(width/2,height/3,80,80);
       noLoop();
    }


}
