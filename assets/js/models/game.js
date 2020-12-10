class Game {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");
    this.bar = new Bar(this.ctx, 300, 450, 100, 20);
    this.fps = 1000 / 60;
    this.ball = new Ball(this.ctx, 350, 451, 100, 20);
    this.brick = new Brick(this.ctx, 300, 400, 24, 80);
    this.lives = 2;


    this.gamestate = GAMESTATE.MENU;
    this.gameover = document.getElementById("img_gameover");
    this.youwin = document.getElementById("img_youwin");

  }

  start() {
    setInterval(() => {
      this.clear();
      this.move();
      this.draw();
    }, this.fps);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  draw() {
    this.bar.draw();
    this.ball.draw();
    this.brick.draw();

  }

  update() {
    if (this.lives === 0) this.gamestate = GAMESTATE.GAMEOVER;
  }

  onKeyEvent(event) {
    this.bar.onKeyEvent(event);
  }

  move() {
    this.bar.move();
    this.ball.move();
  }
}
