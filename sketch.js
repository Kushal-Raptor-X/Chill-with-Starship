let ss;
let scaleValue;

function preload() {
  ss = loadModel('ss.obj', true);
}

function setup() {
  createCanvas(windowWidth, windowHeight*0.65, WEBGL);
  updateScale();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight*0.65);
  updateScale();
}

function updateScale() {
  // Scale based on the smaller dimension
  scaleValue = min(width, height) / 400; // Adjust 400 based on your needs
}

function draw() {
  background(255, 239, 213);
  scale(scaleValue * 1.5); // Multiply by 2 to maintain your original scaling
  rotateX(frameCount * 0.3);
  rotateY(frameCount * 1);
  rotateZ(frameCount * 0.3);

  normalMaterial();
  model(ss);
}
