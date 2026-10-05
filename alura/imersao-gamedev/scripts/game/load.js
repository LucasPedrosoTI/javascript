function preload() {
  bkg = loadImage("./imagens/cenario/floresta.png");
  fogImg = loadImage("./imagens/cenario/fog.png");
  grassImg = loadImage("./imagens/cenario/grass.png");
  hipstaImg = loadImage("./imagens/personagem/correndo.png");
  charCollisionImage = loadImage("./imagens/personagem/colisao.png");
  enemyImg = loadImage("./imagens/inimigos/gotinha.png");
  trollImg = loadImage("./imagens/inimigos/troll.png");
  flyEnemyImg = loadImage("./imagens/inimigos/gotinha-voadora.png");
  gameOver = loadImage("./imagens/assets/game-over.png");
  startScreenImg = loadImage("./imagens/assets/telaInicial.png");
  lifeImg = loadImage("./imagens/assets/coracao.png");
  font = loadFont("./imagens/assets/fonteTelaInicial.otf");
  gameMusic = loadSound("sons/trilha_jogo.mp3");
  jumpSound = loadSound("sons/somPulo.mp3");
  config = loadJSON("../../config/config.json");
}
