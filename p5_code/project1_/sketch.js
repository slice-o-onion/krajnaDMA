
let value = 0;
let currentkey = '1';
let counter;
let bgc ;

//let gkcount;


function setup() {
    createCanvas(700, 700);
    background(255);
    smooth();
    //noStroke();
      bgc = 255;
      counter=0;
    // bgc = color(255);
    gkcount = 20;
    fkcount=30;
}

function draw() {
    // triggering the clear_print function
    if( keyIsPressed) {
    clear_print();
}
// triggering the newkeychoice
if(mouseIsPressed) {
  drawChoice();
}


}


function drawChoice() {
  // the key mapping if statemens that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of
  // graphic function


 // key global variable contains whatever key was last pressed
 let currentkey = key;

switch(currentkey) {
case '1':
  console.log("1");  // black line
  let k = color(0);
  drawline(color(0), mouseX, mouseY, pmouseX, pmouseY);
  break;

case '2':
  console.log("2");  // red line
  drawline(color(255,0,0), mouseX, mouseY, pmouseX, pmouseY);
  break;


  case '3':
    console.log("3");  // math wave with white colorfill
      rayTowerBrush(color(bgc,0,22), mouseX, mouseY, pmouseX, pmouseY);
     break;


  case '4':
    console.log("4");  // math wave red outline
    //eraser(mouseX, mouseY,30);
    noFill();
    eraser(color(bgc,0,0,30), mouseX, mouseY, pmouseX, pmouseY);
    // eraser(bgc,mouseX, mouseY,30);
     break;

case '5':
  console.log("5");  // erase with bg color
  fill(bgc);
  eraser(bgc,mouseX, mouseY,40);
 break;


case '6':
    console.log("6");  // erase with bg color
    rayRatBrush(gkcount, mouseX, mouseY, pmouseX, pmouseY);
//noStroke();
    if (gkcount > 255 ) {
        gkcount = 30;
    } else {
        gkcount+=3;
    }
    break;
case '7':
        console.log("7");  // erase with bg color
        rayPetalArcBrush(fkcount, mouseX, mouseY, pmouseX, pmouseY);
    //noStroke();
        if (fkcount > 9 ) {
            fkcount =90;
        } else {
            fkcount+=31;
        }
        break;

default:             // Default executes if the case labels
  console.log("None");   // don't match the switch parameter
  break;

  case '8':
    console.log("8");
    let lx=mouseX;
    let ly=mouseY; // erase with bg color
rayBubbleBrush(lx,ly);{
    fill(bgc);
    //eraser(bgc,mouseX, mouseY,40);
   break;
   }

}

}

function drawline( k,  lx, ly,  px, py) {
 // strokeWeight(1);
  stroke(k);
  line(lx, ly, px, py);
  console.log(mouseX);
  console.log(pmouseX);
}

function drawFatLine( k,  lx, ly,  px, py) {
  strokeWeight(10);
  stroke(k);
  line(lx, ly, px, py);
}

function rayRatBrush(kcount, lx, ly,  px, py) {
  {
// stroke(k);7
    let r = random(90);
    let rloop = random(60);
    for (let i = 0; i < r; i++) {
      fill(r+15, rloop+10, random(150));
      ellipse(mouseX, mouseY, r+10, r+10);
    }

}
}

function rayPetalArcBrush(fkcount, lx, ly,  px, py) {
  {
    stroke(3);
    let r = random(90);
    let rloop = random(1,10);
    for (let i = 15; i < r; i++) {
      fill(400, rloop-100, 0);
      arc(mouseX, mouseY, 50, r, r, QUARTER_PI, PIE);
      fill(127, rloop-10, 25);
      arc(mouseX, mouseY, 30, r, r, HALF_PI, PIE);
    }
  }
}



function eraser( k, lx, ly, sz) {
  stroke(k);
  ellipse(lx, ly, sz,sz);
}

function rayTowerBrush( k, lx, ly, sz) {
  let r = random(10,100);
  let rloop = random(40);
  let i=0;
  for (let i = 0; i < r; i++) {
    // fill(rloop+5, rloop+7, random(120));
    // ellipse(mouseX-30, mouseY, r+2, r+10);
  }
  if (mouseX == mouseY){
    fill(100, rloop+7, random(110));
    ellipse(mouseX,10-mouseY,i,r+i)
  }
  else  if (mouseX < mouseY-r){
  fill(40, rloop+7, random(250));
    ellipse(mouseX-20, mouseY+30, r,r);
  }
  else {
    fill(random(110,225));
    ellipse(mouseX, mouseY+r, r,r)
}

}

function rayBubbleBrush(lx,ly) {
  stroke(8);
  let r=random(90);
  if ( key == '8' || key == 'a'|| key == 'A' ) {
    if (bgc < 0) {
        //fill(220,30,50);
        // ellipse(mouseX,mouseY,10,r);


      } else {
        //translate(lx,ly);
      //  translate(width/2-50, height/2-100);
        //rotate(radians(counter1));
        fill(180,30,50);
        // ellipse(mouseX,mouseY-mouseX,random(170,190),random(80,120));//makes red fins
        //  ellipse(mouseX,35,r,mouseX);//makes red fins
        fill(220,180,300);
       ellipse(mouseX-5,mouseY-5,50,200);

      // fill(27,180,300);
       fill(178,34,34);
      ellipse(mouseX+5,mouseY+5,50,200);//shade on fin

        fill(220,180,50);//yellow
   ellipse(mouseX+3,mouseY+3,180,140);//head

      }
    }
  }

function clear_print() {

// these 2 options let you choose between clearing the background
// and saveing the current image as a file.
  if (key == 'x' || key == 'X') {
     background(255);
  } else if (key == 'p' || key == 'P') {
      saveFrames('image-0', 'png', 1, 1);
      key = '';  // resets the key so it does not make more than one image.
  }

}
