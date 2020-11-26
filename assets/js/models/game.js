class Game {
  
    constructor(canvasId) {
      this.canvas = document.getElementById(canvasId);
      this.canvas.height = 480;
      this.canvas.width = 640;
      this.ctx = this.canvas.getContext('2d');

    }
}
  