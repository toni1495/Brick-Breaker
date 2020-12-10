class Bar {
  constructor(ctx, x, y, w, h) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;

    this.vx = 3;

    this.movements = {
      right: false,
      left: false,
    };
  }

  draw() {
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  onKeyEvent(event) {
    const status = event.type === "keydown";
    switch (event.keyCode) {
      case KEY_RIGHT:
        this.movements.right = status;
        break;
      case KEY_LEFT:
        this.movements.left = status;
        break;
    }
  }

  move() {
    if (this.movements.right) {
      this.x += this.vx;
    } else if (this.movements.left) {
      this.x -= this.vx;
    } 

   
    }

  checkCollisions() {}

  stop() {
    this.vx = 0;
    this.vy = 0;
  }
}
