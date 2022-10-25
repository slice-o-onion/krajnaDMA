let count = 20;
let loX = new Array(count);
let loY = new Array(count);
let speedX = new Array(count);
let speedY = new Array(count);
let sizeW = new Array(count);
let sizeH = new Array(count);
let colorR = new Array(count);
let colorG = new Array(count);
let colorB = new Array(count);
let cirOrSquare= new Array(count);
let opacity= new Array(count);


function setup() {
  createCanvas(600, 600);
  for (let i=0; i < loX.length; i++) {
    loX[i] = width/2;
    loY[i] = height/2;
    speedX[i] = random(-5, 5);
    speedY[i] = random(-5, 5);
    sizeW[i] = random(20, 25);
    sizeH[i] = random(20, 100);
    colorR[i] = int(random(0, 210));
    colorG[i] = int(random(0, 210));
    colorB[i] = int(random(0, 210));
    cirOrSquare[i]= random(0,20);
    opacity[i]= random(5,100);

  }
}
function draw() {
  background(155);
//  noFill();
  fill(70,10,60);
  rect(40, 40, width-80, height-80);
  for (let i = 0; i < loX.length; i++) {
    //update all positions
    loX[i] += speedX[i];
    loY[i] += speedY[i];
    //draw all balls
    fill(colorR[i],colorG[i],colorB[i]);
    ellipse(loX[i], loY[i], sizeW[i], sizeW[i]);
    //rect(loX[i], loY[i], sizeW[i], sizeH[i]);
    //check boundaries for all balls

    if (loX[i] < 40+sizeW[i]/2 || loX[i] > (width-40)-sizeW[i]/2 ) {
      speedX[i] = -speedX[i];
    }
    if (loY[i] < 10+sizeW[i]/2 || loY[i] > (height-10)-sizeW[i]/2) {
      speedY[i] = -speedY[i];{
          fill(colorR[i],colorG[i],colorB[i]);
            rect(loX[i]/2, loY[i]/2, sizeW[i], sizeH[i]);
      }


    }
  }
}
