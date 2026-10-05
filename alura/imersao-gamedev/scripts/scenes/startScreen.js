class StartScreen {
  constructor() {}

  draw() {
    this._bkgImg();
    this._text();
    this._botao();
  }

  _bkgImg() {
    image(startScreenImg, 0, 0, width, height);
  }

  _text() {
    textFont(font);
    textAlign(CENTER);
    textSize(50);

    text("As Aventuras de", width / 2, height / 4);
    textSize(125);
    text("Hipsta", width / 2, (height / 5) * 2);
  }

  _botao() {
    button.draw();
  }
}
