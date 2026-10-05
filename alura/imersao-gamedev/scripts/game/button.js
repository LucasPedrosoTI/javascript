class Button {
  constructor(text, posX, posY) {
    this.text = text;
    this.posX = posX;
    this.posY = posY;
    this.button = createButton(this.text);

    this.button.mousePressed(() => this._changeScreen());
    this.button.addClass("botao-tela-inicial");
  }

  draw() {
    this.button.position(this.posX, this.posY);
    this.button.center();
  }

  _changeScreen(key) {
    this.button.remove();
    currentScreen = "game";
  }
}
