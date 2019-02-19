
//object is a pink circle
let circle = {};
circle.size = 100;
circle.color = 'pink';

//variable that defines movement
let x_pos = 0;

//variabke for map
let value = 50.8;

function setup() {
  createCanvas( windowWidth, 600 );
  background('rgb(0,102,104)');
   frameRate(10);
}


function draw() {

//how circle will move across canvas
  let y_pos = x_pos/width*3-3;
   fill( circle.color );

//starts in top corner (0) and moves across top of canvas
   ellipse(x_pos, y_pos, circle.size );
//starts in bottom corner (0) and moves across botttom of canvas
  fill(circle.color);
  ellipse(x_pos, 600, circle.size);

//boundary off canvas and position of circle related to canvas
  x_pos += 20;
  x_pos %= width;

// mapped circle using a set value IN CENTER OF CANVAS
      let mapC = map(value, 0, 100, 0, width);
      //random color of mapped circle
      //use floor and ceil. With ceil move RGB down to 255 so it still in range 0-256
      let color1 = ceil(random(255));
      let color2 = floor(random(256));
      let color3 = ceil(random(255));
      //make fill random
      fill(color1, color2, color3);
      //mapped circle
      ellipse(mapC, 300, 100, 100);
 }
