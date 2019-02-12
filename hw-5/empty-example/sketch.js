//Animated Sketch
// Car
//note to self: use underscores, tabs and do not forget semi colons

//start by making setup function
function setup() {
  //making the size of the canvas
     createCanvas(600 , 600);
  //frame rate
      frameRate(10)
}

let angle = 0

function draw() {

  angle = angle + 20

//background
   background( 'rgb(102, 255, 255)' );
//no cursor
  noCursor();

push();
 /// animated sun
    translate (0,100);
    rotate( radians(angle) );
    fill(255, 204, 0);
    ellipse(100, 100, 100,100);
pop();

// *****************************
// CAR SANDBOX
// *****************************
 push();
// car folllow mouse
  translate( mouseX, mouseY );
push();
//Car
  rotate(HALF_PI * 2);
  fill('red');
  rect(0,0, 200, 25);
  quad(50,25,75,75,125,75,150,25);
//wheel
  fill(100);
  ellipse(50, 0, 40, 40 );
  ellipse(150,0 ,40,40);
pop();
}
