class gameOver {
  img = {
    spriteX: 175,
    spriteY: 228,
    width: 228,
    height: 200,
    x: 90,
    y: 100,
  };

  // медали
  medal = {
    golden: { spriteX: 312, spriteY: 155 },
    silver: { spriteX: 312, spriteY: 111 },
    bronze: { spriteX: 357, spriteY: 155 },
    platinum: { spriteX: 357, spriteY: 111 },
    source: { spriteW: 48, spriteH: 48, x: 110, y: 185 },
  };

  // рисуем
  drawEngine() {
    if (state.current !== state.gOver) return;

    context.drawImage(
      sprite,
      this.img.spriteX,
      this.img.spriteY,
      this.img.width,
      this.img.height,
      this.img.x,
      this.img.y,
      this.img.width,
      this.img.height
    );

    let { golden, silver, bronze, platinum, source } = this.medal;

    let drawMedal;
    // условия выбора медали
    if (score.currentScore >= 0 && score.currentScore < 10) {
      drawMedal = bronze;
    } else if (score.currentScore >= 10 && score.currentScore < 20) {
      drawMedal = silver;
    } else if (score.currentScore >= 20 && score.currentScore < 30) {
      drawMedal = golden;
    } else if (score.currentScore >= 30) {
      drawMedal = platinum;
    }

    // рисуем нужную медаль исходя из условий
    context.drawImage(
      sprite,
      drawMedal.spriteX,
      drawMedal.spriteY,
      source.spriteW,
      source.spriteH,
      source.x,
      source.y,
      source.spriteW,
      source.spriteH
    );
  }
}
