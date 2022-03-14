var centerX = 0;
var centerY = 0;
var height = 0;
var width = 0;
var result;
var sand;
var i = 0;
var f = 0;
var t = 0;
var leafObject;
var leafSprite;
var leafStatic;
var fadeTimer;
const rain = [];



function preload() {
  leafStatic = loadImage('./assets/images/leaf1.png');
  sand = loadImage('./assets/images/sand.jpg');
  leafSpriteSheet = loadSpriteSheet('./assets/images/leaves.png', 100, 108, 7);
}

function setup()
{
  leafSprite = createSprite(20, 30, 10, 5)
  //leafSprite.addImage(leafStatic)
  leafSprite.addAnimation('fading', leafSpriteSheet);
  leafSprite.addImage('static', leafStatic);
  
  
  leafSprite.animation.stop();


    
    //load animation
    //leafObject = loadAnimation('./assets/images/' + result[0], './assets/images/' + result[result.length-1]);
 

  

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

  //set up background and text.
  background(255,184,191);
  image (sand,0,0);
  textSize(30);
  fill(225, 225, 225);
  textFont('Garamond');
  text("Teddy Jumpp", centerX + 300, centerY + 200);
  textSize(40);
  textFont('Garamond');
  text("Desert Rose", centerX +- 350, centerY +- 350);

  //set up colors
  fill(74,93,35);
  stroke(74,93,35);
  //center-ish canvas
  //translate(width/2,height/2);

  //draw leafSprite
  animation(leafSprite, 0, 0);

  //i bless the rains down in africa
  for (let i = 0; i < 5; i++) 
  {
    let p = new raindrops();
    rain.push(p);
  }
  for (let i = rain.length - 1; i >= 0; i--) 
  {
    rain[i].update();
    rain[i].show();

    if (rain[i].finished()) {
      // remove this particle
      rain.splice(i, 1);
    }
  }

  //setCollider leaf
  leafSprite.mouseActive = true;
  leafSprite.setCollider("rectangle", 0, 0, 108, 100)
  leafSprite.debug = true;
  //try and return the frame + if mouse is over
  //console.log(leafSprite.mouseIsOver);
  //console.log(leafSprite.animation.getFrame());

  //if mouse is over, fade leaf.
  if(leafSprite.mouseIsOver == true)
  {
    leafSprite.changeAnimation("fading");
    leafSprite.animation.play();

    if(leafSprite.animation.getFrame() == 6)
    {
      leafSprite.animation.stop();
      fadeTimer = setInterval(fadeawayTimer, 1000)
    }

  }
  

  function fadeawayTimer()
  {
    
    leafSprite.animation.previousFrame();
    t++
    if(t = 6)
    {
      t = 0
      leafSprite.changeAnimation("static");
      clearInterval(fadeTimer);
    }
    

  }
 
  

}
