var centerX = 0;
var centerY = 0;
var movementOne = 120;
var movementTwo = 70;
var timer = 0;

function setup()
{
    createCanvas(displayWidth, displayHeight);
    centerX = displayWidth * 0.5;
    centerY = displayHeight * 0.5;
    print("centerX is: " + centerX);
    print("centerY is: " + centerY);

    button = createButton("Go Back");
    button.size(225, 125);
    button.position(centerX + 400, centerY + 300);
    button.style("font-family", "Times New Roman");
    button.style("font-size", "48px");
}

function preload() {
  sand = loadImage('./assets/sand.jpg');
}

function draw()
{


    background(255,184,191);
    image (sand,0,0)
    textSize(30);
    fill(225, 225, 225);
    textFont('Garamond');
    text("Teddy Jumpp", centerX + 300, centerY + 200);
    textSize(40);
    textFont('Garamond');
    text("Desert Rose", centerX +- 350, centerY +- 350);

    fill(74,93,35);
    stroke(74,93,35);

    //center four
    // triangle(295,295,245,295,295,245);
    triangle(centerX +- 5, centerY +- 5, centerX +- 5, centerY +- 55, centerX +- 55, centerY +- 5);
    // triangle(305,305,355,305,305,355);
    triangle(centerX + 5, centerY + 5, centerX + 55, centerY + 5, centerX + 5, centerY + 55);
    // triangle(295,305,245,305,295,355);
    triangle(centerX +- 5, centerY + 5, centerX +- 55, centerY + 5, centerX +- 5, centerY + 55);
    // triangle(305,295,355,295,305,245);
    triangle(centerX + 5, centerY +- 5, centerX + 55, centerY +- 5, centerX + 5, centerY +- 55);
    // triangle(240,240,240,290,290,240);

    //stem bases
    triangle(centerX +- 60, centerY +- 60, centerX +- 60, centerY +- 10, centerX +- 10, centerY +- 60);
    triangle(centerX + 60, centerY + 60, centerX + 60, centerY + 10, centerX + 10, centerY + 60);
    triangle(centerX +- 60, centerY + 60, centerX +- 60, centerY + 10, centerX +- 10, centerY + 60);
    triangle(centerX + 60, centerY +- 60, centerX + 60, centerY +- 10, centerX + 10, centerY +- 60);

    //petals
    fill(128, 128, 0);
    stroke(128, 128, 0);
    triangle(centerX + 60, centerY + 65, centerX + 60, centerY + 115, centerX + 10, centerY + 65);
    triangle(centerX + 60, centerY +- 65, centerX + 60, centerY +- 115, centerX + 10, centerY +- 65);
    triangle(centerX +- 60, centerY +- 65, centerX +- 60, centerY +- 115, centerX +- 10, centerY +- 65);
    triangle(centerX +- 60, centerY + 65, centerX +- 60, centerY + 115, centerX +- 10, centerY + 65);

    triangle(centerX + 65, centerY + 65, centerX + 65, centerY + 115, centerX + 115, centerY + 65);
    triangle(centerX +- 65, centerY +- 65, centerX +- 65, centerY +- 115, centerX +- 115, centerY +- 65);
    triangle(centerX +- 65, centerY + 65, centerX +- 65, centerY + 115, centerX +- 115, centerY + 65);
    triangle(centerX + 65, centerY +- 65, centerX + 65, centerY +- 115, centerX + 115, centerY +- 65);

    triangle(centerX +- 65, centerY +- 60, centerX +- 65, centerY +- 10, centerX +- 115, centerY +- 60);
    triangle(centerX + 65, centerY + 60, centerX + 65, centerY + 10, centerX + 115, centerY + 60);
    triangle(centerX +- 65, centerY + 60, centerX +- 65, centerY + 10, centerX +- 115, centerY + 60);
    triangle(centerX + 65, centerY +- 60, centerX + 65, centerY +- 10, centerX + 115, centerY +- 60);

    //tips
    fill(157, 54, 149);
    stroke(157, 54, 149);
    triangle(centerX +- movementOne, centerY + movementOne, centerX +- movementOne, centerY + movementTwo, centerX +- movementTwo, centerY + movementOne);
    triangle(centerX +- movementOne, centerY +- movementOne, centerX +- movementOne, centerY +- movementTwo, centerX +- movementTwo, centerY +- movementOne);
    triangle(centerX + movementOne, centerY + movementOne, centerX + movementOne, centerY + movementTwo, centerX + movementTwo, centerY + movementOne);
    triangle(centerX + movementOne, centerY +- movementOne, centerX + movementOne, centerY +- movementTwo, centerX + movementTwo, centerY +- movementOne);
    
    timer++

    if (timer == 120)
    {
      movementOne += 5;
      movementTwo += 5;
      timer = 0;
      print("timer reset")
    } 
  }



  /*function keyPressed() {
  if (key === 'a') {
    movementOne = movementOne + random(5);} 
  else if (key === 'd') {
    movementOne = movementOne +- random(5);} 
  else if (key === 'w') {
   movementTwo = movementTwo +- random(5);} 
  else if (key === 's') {
   movementTwo = movementTwo + random(5);}
}*/
  