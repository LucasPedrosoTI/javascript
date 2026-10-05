function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  gameMusic.loop();

  button = new Button("Iniciar", "game", width / 2, height / 2);
  startScreen = new StartScreen();
  game = new Game();
  game.setup();

  scenes = {
    game,
    startScreen,
  };
}

function keyPressed() {
  game.keyPressed(key);
}

function touchStarted() {
  game.touchStarted();
}

function draw() {
  scenes[currentScreen].draw();
}
