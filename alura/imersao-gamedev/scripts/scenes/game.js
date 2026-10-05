class Game {
  constructor() {}

  setup() {
    score = new Score();
    scenary = new Scenary(bkg, 3, width, height, 0);
    fog = new Scenary(fogImg, 1, width, height / 2.5, 0);
    life = new Life(config.setup.maxLife, config.setup.initialLife);
    grass = new Scenary(
      grassImg,
      2,
      width,
      height / 6,
      height - height / 6 + 30
    );

    char = new Char(
      hipstaImg,
      0,
      height - 30,
      660,
      810,
      4,
      4,
      110,
      135,
      220,
      270
    );

    const enemy = new Enemy(
      enemyImg,
      width - 220,
      height - 30,
      312,
      624,
      4,
      7,
      52,
      52,
      104,
      104,
      11,
      1000
    );

    const troll = new Enemy(
      trollImg,
      width * 2,
      height - 10,
      1600,
      2000,
      5,
      6,
      200,
      200,
      400,
      400,
      12,
      1500,
      2
    );

    const flyEnemy = new Enemy(
      flyEnemyImg,
      width,
      height - 300,
      400,
      750,
      3,
      6,
      100,
      75,
      200,
      150,
      13,
      500,
      2
    );

    enemies.push(enemy, troll, flyEnemy);
  }

  keyPressed(key) {
    if (key == "ArrowUp" && keyPress < 2) {
      // ++ limits jump to double
      char.jump(40);
      jumpSound.play();
      keyPress++;
    }
  }

  touchStarted() {
    if (keyPress < 2) {
      char.jump(40);
      jumpSound.play();
      keyPress++;
    }
  }

  draw() {
    scenary.show();
    scenary.move();

    life.draw();

    score.show();
    score.addScore();

    fog.show(); //++ adding fog and grass to layer 2
    fog.move();

    char.show();
    if (keyPress != 0) {
      char.applyGravity(); // ++ only calls gravity when in air
    }

    enemies.forEach((enemy) => {
      enemy.show();
      enemy.move();

      if (char.isColliding(enemy)) {
        life.loseLife();
        char.getUnbeatable();

        if (life.lives <= 0) {
          image(gameOver, width / 2 - 200, height / 3);

          noLoop();
        }
      }
    });

    grass.show();
    grass.move();
  }
}
