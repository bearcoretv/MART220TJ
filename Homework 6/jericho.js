var centerX = 0;
var centerY = 0;
var height = 0;
var width = 0;
var result;
var sand;
var i = 0;
var f = 0;
var leafObject;



function preload() {
  result = loadStrings('./assets/paths/leaves.txt');
  sand = loadImage('./assets/images/sand.jpg');
}

function setup()
{
    //load animation
    leafObject = loadAnimation('./assets/images/' + result[0], './assets/images/' + result[result.length-1]);
 

  

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

    animation(leafObject, 0,0);
  }