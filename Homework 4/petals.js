class mycircle
{
    constructor(x, y, diameter, r, g, b)
    {
     this.x = x;
     this.y = y;
     this.diameter = diameter;
     this.r = r;
     this.g = g;
     this.b = b;
    }

    drawcircle()
    {
        fill(this.r, this.g, this.b);
        stroke(this.r, this.g, this.b);
        circle(this.x, this.y, this.diameter);
    }
}

