let heart;
let lonelyhearts;
let club;
let star;
let metalpurple;
var variablex1 = 100;
var variabley1 = 100;
var variablex2 = -100;
var variabley2 = 100;

function preload() {
  // Load model with normalise parameter set to true
  heart = loadModel('./Assets/3DModels/Heart/heart.obj', true);
  lonelyhearts = loadModel('./Assets/3DModels/lonelyhearts/lonelyhearts.obj', true);
  club = loadModel('./Assets/3DModels/club/club.obj', true);
  star = loadModel('./Assets/3DModels/star.obj', true);
  metalpurple = loadImage('./Assets/images/metalpurple.jpg')
}

function setup() {
  createCanvas(500, 500, WEBGL);
  rotateX(180)
  myName = createWord3D(
    "Teddy Jumpp"
  )
}

function draw() {
  background(0);

  push();
  scale(0.7);
  translate(0,-150);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(metalpurple);
  noStroke();
  model(heart);
  pop();

  push();
  translate(0,0);
  rotateX(180);
  scale(1.5)
  normalMaterial();
  model(lonelyhearts);
  pop();

  push();
  translate(0,75);
  rotateX(180);
  scale(0.5);
  normalMaterial();
  model(club);
  pop();

  push();
  translate(variablex1,variabley1);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  scale(0.5);
  texture(metalpurple);
  noStroke();
  model(star);
  pop();

  push();
  translate(variablex2,variabley2);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  scale(0.5);
  texture(metalpurple);
  noStroke();
  model(star);
  pop();

  push();
  translate(-80,-200);
  scale(0.1);
  myName.show();
  pop();


  if(mouseIsPressed == true)
  {
    variablex1 = random(-250,250);
    variabley1 = random(-250,250);
    variablex2 = random(-250,250);
    variabley2 = random(-250,250);
  }
}

