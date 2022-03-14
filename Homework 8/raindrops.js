class raindrops {

    constructor() {
      this.x = random(0, 1520);
      this.y = -30;
      this.vx = random(-1, 3);
      this.vy = random(1, 5);
      this.alpha = 255;
    }

    
    finished() {
     return this.alpha < 0;
    }
  
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.alpha -= 1;
    }
  
    show() {
      noStroke();
      fill(196, 211, 223, this.alpha);
      rect(this.x, this.y, 4, 12);
      
    }
}