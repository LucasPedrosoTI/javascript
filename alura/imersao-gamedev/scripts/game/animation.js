class Animation {
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
    _pop
  ) {
    this.image = image;
    this.array = generateArray(totalWidth, totalHeight, nLines, nCol, _pop);
    this.currentFrame = 0;
    this.imageHeight = imageHeight;
    this.imageWidth = imageWidth;
    this.cropWidth = cropWidth;
    this.cropHeight = cropHeight;
    this.initialPosition = initialPosition;
    this.initialHeight = initialHeight - this.imageHeight;
  }

  show() {
    image(
      this.image, //image to render
      this.initialPosition, //position x
      this.initialHeight, //position Y
      this.imageWidth, //image size x
      this.imageHeight, //image size yim
      this.array[this.currentFrame][0], // crop start X
      this.array[this.currentFrame][1], // crop star Y
      this.cropWidth, //crop end X
      this.cropHeight // crop end Y
    );

    this.animate();
  }

  animate() {
    this.currentFrame++;

    if (this.currentFrame >= this.array.length - 1) {
      this.currentFrame = 0;
    }
  }
}
