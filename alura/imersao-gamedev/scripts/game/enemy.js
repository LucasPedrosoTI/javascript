class Enemy extends Animation {
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
    cropHeight,
    speed,
    delay,
    _pop
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
      cropHeight,
      _pop
    );
    this.speed = speed;
    this.delay = delay;
    this.initialPosition = width + this.delay;
  }

  move() {
    this.initialPosition =
      this.initialPosition - this.speed * parseInt(random(1, 3));

    if (
      this.initialPosition <
      -this.imageWidth - this.delay * parseInt(random(1, 4))
    ) {
      this.initialPosition = width;
    }
  }
}
