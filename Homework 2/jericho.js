var centerX = 0;
var centerY = 0;

function setup()
{
    createCanvas(displayWidth, displayHeight);
    centerX = displayWidth * 0.5;
    centerY = displayHeight * 0.5;
    print("centerX is: " + centerX);
    print("centerY is: " + centerY);
}

function draw()
{
    background(255,184,191);
    fill(74,93,35);
    stroke(74,93,35);

    // triangle(295,295,245,295,295,245);

    triangle(centerX +- 5, centerY +- 5, centerX +- 5, centerY +- 55, centerX +- 55, centerY +- 5);
    //  triangle(305,305,355,305,305,355);

    triangle(centerX ++ 5, centerY ++ 5, centerX ++ 55, centerY ++ 5, centerX ++ 5, centerY ++ 55);

    triangle(295,305,245,305,295,355);
    triangle(305,295,355,295,305,245);
    triangle(240,240,240,290,290,240);
}