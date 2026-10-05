class Char extends Animation {
  constructor(
    image,
    initialPosition,
    initialHeight,
    totalWidth,
    totalHeight,
    nLines,
    nCol,
    imageWidth,
    imageHeight,
    cropWidth,
    cropHeight
  ) {
    super(
      image,
      initialPosition,
      initialHeight,
      totalWidth,
      totalHeight,
      nLines,
      nCol,
      imageWidth,
      imageHeight,
      cropWidth,
      cropHeight
    );

    this.initialY = initialHeight - this.imageHeight;
    this.initialHeight = this.initialY;
    this.gravity = 3;
    this.jumpSpeed = 0;
    this.unbeatable = false;
  }

  jump(speed) {
    this.jumpSpeed = -speed;
  }

  applyGravity() {
    this.initialHeight = this.initialHeight + this.jumpSpeed;
    this.jumpSpeed = this.jumpSpeed + this.gravity;

    if (this.initialHeight > this.initialY) {
      this.initialHeight = this.initialY;
    }

    if (this.initialHeight == this.initialY) {
      keyPress = 0;
    }
  }

  getUnbeatable() {
    this.unbeatable = true;
    this.image = charCollisionImage;

    setTimeout(() => {
      this.unbeatable = false;
      this.image = hipstaImg;
    }, 1000);
  }

  isColliding(enemy) {
    if (this.unbeatable) return false;

    const precision = 0.7;

    const collide = collideRectRect(
      this.initialPosition,
      this.initialHeight,
      this.imageWidth * precision,
      this.imageHeight * precision,
      enemy.initialPosition,
      enemy.initialHeight,
      enemy.imageWidth * precision,
      enemy.imageHeight * precision
    );

    return collide;
  }
}
