var centerX = 0;
var centerY = 0;
var height = 0;
var width = 0;
var leafObject = [];
var leafFade = [];
var result;
var sand;
var i = 0;
var f = 0;


function preload() {
  result = loadStrings('assets/paths/leaves.txt');
  sand = loadImage('assets/images/sand.jpg');
}

function setup()
{
  for(var i = 0; i < result.length; i++)
  {
    leafObject.push(new leaf('assets/images/' + result[i], 0, 0));
    leafFade[i] = leafObject[i].getImage();
  }

  

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

    for(var v = 0; v < result.length; v++)
    {
      translate(25,25);
      image(leafFade[f], leafObject[i].getX(), leafObject[i].getY());
    }

    
  }

function mouseClicked()
  {
    fadeInterval = setInterval(incrimentFade, 50);
   
  }

function incrimentFade()
  {
    if(f <= leafFade.length)
    {
    f++ 
    
    }

    else if(f >= leafFade.length)
    {
      appearInterval = setInterval(incrimentAppear, 100);
    }
  }
function incrimentAppear()
  {
    if(f <= leafFade.length)
    {
    clearInterval(fadeInterval)
    f +- 1
    console.log(f)
    }
    else if (f == 0)
    {
      clearInterval(appearInterval);
    }
  }
