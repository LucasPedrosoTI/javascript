class Coin extends Enemy {
  constructor(
    image,
    initialPosition,
    initialHeight,
    totalWidth,
    totalHeight,
    imageWidth,
    imageHeight,
    cropWidth,
    cropHeight,
    speed,
    delay
  ) {
    super(
      image,
      initialPosition,
      initialHeight,
      totalWidth,
      totalHeight,
      imageWidth,
      imageHeight,
      cropWidth,
      cropHeight,
      speed,
      delay
    );

    // this.initialHeight =
    //   initialHeight * (Math.random() * 1000) - this.imageHeight;
    // this.speed = speed * (Math.random() * 10);
    // this.delay = delay * (Math.random() * 1000);
  }

  // move() {
  //   this.initialPosition = this.initialPosition - this.speed;

  //   if (this.initialPosition < -this.imageWidth - this.delay) {
  //     this.initialPosition = width;
  //   }
  // }
}
