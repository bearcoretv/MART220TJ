var centerX = 0;
var centerY = 0;
//var movementOne = 120;
//var movementTwo = 70;
var timer = 0;
//var x = [];
//var changeamountX = -115;
//var y = [];
//var changeamountY = -115;
var petals = [];
var petalsize = 5;
var rvalue = 74;
var gvalue = 93;
var bvalue = 35;
var changeamt = 0.9;
var height = 0;
var width = 0;
var transx = 20;
var transy = 20;

function setup()
{
    createCanvas(displayWidth, displayHeight);
    
    height = displayHeight;
    width = displayWidth;
    centerX = displayWidth * 0.5;
    centerY = displayHeight * 0.5;
    print("centerX is: " + centerX);
    print("centerY is: " + centerY);

    button = createButton("Go Back");
    button.size(225, 125);
    button.position(centerX + 400, centerY + 300);
    button.style("font-family", "Times New Roman");
    button.style("font-size", "48px");

   translate(centerX,centerY);

    for(var i = 0; i < 20; i++)
    {
      temppetal = new mycircle(0, 0, petalsize, rvalue, gvalue, bvalue)
      petals[i] = temppetal
      //petalsize += 5
    }
    console.log(petals.length)

}

function preload() {
  sand = loadImage('./assets/sand.jpg');
}

function draw()
  {


    background(255,184,191);
    image (sand,0,0);
    textSize(30);
    fill(225, 225, 225);
    textFont('Garamond');
    text("Teddy Jumpp", centerX + 300, centerY + 200);
    textSize(40);
    textFont('Garamond');
    text("Desert Rose", centerX +- 350, centerY +- 350);

    fill(74,93,35);
    stroke(74,93,35);
    
    translate(width/2,height/2);
    
    
    for (var c = 0; c < petals.length; c++)
    {
      petals[c].drawcircle();
      translate(25,25);
      
      
     
      
      
    }
    




    /* obsolete triangles
    //center four
    triangle(centerX +- 5, centerY +- 5, centerX +- 5, centerY +- 55, centerX +- 55, centerY +- 5);
    triangle(centerX + 5, centerY + 5, centerX + 55, centerY + 5, centerX + 5, centerY + 55);
    triangle(centerX +- 5, centerY + 5, centerX +- 55, centerY + 5, centerX +- 5, centerY + 55);
    triangle(centerX + 5, centerY +- 5, centerX + 55, centerY +- 5, centerX + 5, centerY +- 55);
    

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
    */

    /*timer++

    if (timer == 120)
    {
      movementOne += 5;
      movementTwo += 5;
      timer = 0;
      print("timer reset")
    } */
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
  