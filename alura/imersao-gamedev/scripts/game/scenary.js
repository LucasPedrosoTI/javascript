class Scenary {
  constructor(image, speed, width, height, y) {
    this.image = image;
    this.speed = speed;
    this.x1 = 0;
    this.x2 = width;
    this.width = width;
    this.height = height;
    this.y = y;
  }

  show() {
    image(
      this.image, //bkg img
      this.x1, //start img x
      this.y, //start img y
      this.width, //img size
      this.height //img size
    );

    image(
      this.image, //bkg img
      this.x2, //start img x
      this.y, //start img y
      this.width, //img size
      this.height //img size
    );
  }

  move() {
    this.x1 = this.x1 - this.speed;
    this.x2 = this.x2 - this.speed;

    if (this.x1 < -this.width) {
      this.x1 = this.width;
    }

    if (this.x2 < -this.width) {
      this.x2 = this.width;
    }
  }
}
