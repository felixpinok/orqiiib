var start = 0;
var n = 0;
var s = 0;
var y = 0;
var tono = 174;
var velTono = 0.5;
var status;

function setup() {

  var canvas = createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  status = 0;
  // Move the canvas so it's inside our <div id="sketch-holder">.
  canvas.parent('sketch-holder');

  //background(255, 0, 200);
}
function draw() {
  //background(0, 0, 15); //51
  //currentSlide =
  //slideNumber =
  //dom.slideNumber
  noFill();
  //console.log(slide.getAttribute( 'id' ));
  //function slide( h, v, f, o )
  //console.log('indexh ' + indexh); //FPK
  //console.log(indexh); //FPK

  if (status == 0) screen0();
  // if ( == 1) screen1();
  // if ( == 2) screen2();

  //console.log(slide);
}

// function mousePressed() {
//   status++
//   if (status > 2) status = 0;
//   //println(status);
// }

function screen0() {
  var inc = 0.32904148783977116;
  var onc = 0.002967244701348748;
  // var inc = map(mouseY, 0, height, 0., 10);
  // var onc = map(mouseX, 0, width, -0.005, 0.005);
  background(0); //51 // (0,0,15)
  tono = tono + velTono;
  if (tono > 321.) {
    velTono = -0.5;
  }
  if (tono < 174.) {
    velTono = 0.5;
  }
  noFill();
  beginShape();
  var xoff = start;
  for (var x = 0; x < width; x++) {
    stroke(tono, 33, 177,15);
    //stroke(random(255);
    var n = map(noise(xoff), 0, 1, -5, 5);
    var s = map(sin(xoff), -1, 1, 0, height);
    var y = s + n;
    point(x, y, 5, 5);
    xoff += inc;
  }
  endShape();
  start += inc * onc;
  //console.log('inc: ' + inc + ' onc: ' + onc);

  //stroke(255);
  //strokeWeight(1);
  //text('inc: ' + inc + 'onc: ' + onc);
}
