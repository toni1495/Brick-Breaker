const game = new Game("game")


document.addEventListener('keyup', (event) => {
    game.onKeyEvent(event);
  });

  document.addEventListener('keydown', (event) => {
    game.onKeyEvent(event);
  });

  document.addEventListener('keypress', (event) => {
    game.start();
  })


game.start() 


