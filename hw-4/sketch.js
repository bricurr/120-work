//start by making setup function
function setup() {
  //making the size of the canvas
     createCanvas(600 , 600);
}
function draw() {
  //background
   background( 'rgb(182, 195, 245)' );

 push();

//body
  fill( 'rgb(118, 118, 118)' );
  triangle(100, 400, 300, 100, 500, 400);


//eyes
  fill('rgb(225,0,0)')
  ellipse( 275, 200, 10, 10);
  ellipse( 330, 200, 10, 10);

//eyebrows
  rect(265, 175, 20, 10);
  rect(320, 175, 20, 10);


//mouth
  stroke( 'rgb(0, 0, 0)' );
  strokeWeight( 7 );
  arc( 300, 300, 200, 200, 0, PI );


//left teeth
  triangle(302,304,308,320, 314,304)
  triangle(260,304,266,320, 272,304)
  triangle(218,304,224,320, 230,304)

//right teeth
  triangle(344,304,350,320, 356,304)
  triangle(375,304,380,319, 385,304)


//arms
  line(438,300, 500,100)
  line(163,300,100 ,100)

//legs
  line(200,400, 163,550)
  line(400, 400, 437, 550)
pop();
}
