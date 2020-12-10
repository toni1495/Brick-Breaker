class Ball {
  constructor(ctx, x, y,) {
    this.ctx = ctx;
    this.x = x;
    this.vx = SPEED;

    this.y = y;
    this.vy = SPEED;

    this.image = new Image();
    this.image.src = "assets/img/ball.png";
    this.image.isReady = false;

    this.image.onload = () => {
      this.image.isReady = true;

      this.width = this.image.width;
      this.height = this.image.height;
    };
  }

  draw() {
    if (this.image.isReady) {
      this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
  }

  move() {
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
    this.ctx.canvas.width;
    if (this.y + this.height >= this.ctx.canvas.height) {
      this.vy = -this.vy;
    } else if (this.x + this.width >= this.ctx.canvas.width) {
      this.vx = -this.vx;
    } else if (this.x <= 0) {
      this.vx = -this.vx;
    } else if (this.y <= 0) {
      this.vy = -this.vy;
    }
  }
}
