class Ball {

 /*   constructor(ctx, x, y, maxY) {
      this.ctx = ctx;
      this.x = x;
      this.vx = SPEED;
     
      this.y = y;
      this.maxY = maxY;
      this.vy = SPEED;
      
      this.sprite = new Image();
      this.sprite.src = './assets/img/';
      this.sprite.isReady = false;
      this.sprite.horizontalFrameIndex = 0;
      this.sprite.verticalFrameIndex = 0;
      this.sprite.horizontalFrames = 4;
      this.sprite.verticalFrames = 1;
      this.sprite.onload = () => {
        this.isReady = true;
        this.sprite.frameWidth = Math.floor(this.sprite.width / this.sprite.horizontalFrames);
        this.sprite.frameHeight = Math.floor(this.sprite.height / this.sprite.verticalFrames);
        this.width = this.sprite.frameWidth;
        this.height = this.sprite.frameHeight;
      }
  
      this.drawCount = 0;
    }
  
    draw() {
      this.ctx.drawImage(
        this.sprite,
        this.sprite.horizontalFrameIndex * this.sprite.frameWidth,
        this.sprite.verticalFrameIndex * this.sprite.frameHeight,
        this.sprite.frameWidth,
        this.sprite.frameHeight,
        this.x,
        this.y,
        this.width,
        this.height
      );
      this.drawCount++;
      this.animate();
    }
  
    move() {
      this.x += this.vx;
      this.y += this.vy;
      this.vy += GRAVITY;
  
      if (this.y >= (this.maxY - this.height)) {
        this.vy *= -1;
      }
    }
  
    animate() {
      if (this.drawCount % MOVEMENT_FRAMES === 0) {
        this.sprite.horizontalFrameIndex = (this.sprite.horizontalFrameIndex + 1) % this.sprite.horizontalFrames;
        this.drawCount = 0;
      }
    }
    */
  } 