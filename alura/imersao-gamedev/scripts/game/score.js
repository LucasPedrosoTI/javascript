class Score {
  constructor() {
    this.score = 0;
  }

  show() {
    textAlign(RIGHT);
    textSize(50);
    fill("#fff");
    text(parseInt(this.score), width - 30, 50);
  }

  addScore() {
    this.score += 0.2;
  }
}
