class leaf
{
    constructor(img, x, y,identity)
    {
     this.img = img;
     this.x = x;
     this.y = y;
     this.identity = identity;
     
     
    }

    getImage()
    {
    
        return this.img;
    }
    getX()
    {
        return this.x;
    }

    getY()
    {
        return this.y;
    }

    drawLeaf()
    {
        image(this.img,this.x,this.y);
    }
}


