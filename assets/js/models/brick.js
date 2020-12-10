class Brick {
  constructor(ctx, w, h) {
    this.ctx = ctx;
    this.image1 = document.getElementById("img_brick1");
    this.image2 = document.getElementById("img_brick2");
    this.image3 = document.getElementById("img_brick3");
    this.image4 = document.getElementById("img_brick4");
    this.width = w;
    this.height = h;
    this.numCols = 10;
    this.numRows = 4;
    /*this.markedForDeletion = false;*/
  }

  draw() {
    switch(this.ctx) {
      case 1:
        ctx.drawImage(
          this.image1,
          this.width,
          this.height
        );
        break;

      case 2:
        ctx.drawImage(
          this.image2,
          this.width,
          this.height
        );
        break;

      case 3:
        ctx.drawImage(
          this.image3,
          this.width,
          this.height
        );
        break;

      case 4:
        ctx.drawImage(
          this.image4,
          this.width,
          this.height
        );
        break;
    }
  }
}

/*this.ctx = ctx;
    this.x = x;

    this.y = y;

    this.image = new Image();


    this.image.src = "assets/img/brick.png";
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

}*/

/*update() {
        if (detectCollision(this.game.ball, this)) {
          this.game.ball.speed.y = -this.game.ball.speed.y;
    
          this.markedForDeletion = true;
        }
      }*/
