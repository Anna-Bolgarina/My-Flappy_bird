//основной фон
class Background {
  constructor() {
    this.bg = {
      spriteX: 0,
      spriteY: 0,
      spriteW: 274,
      spriteH: 226,
    };
  }

  //рисуем фон
  drawEngine() {
    if (state.current === state.game) {
      index += 0.3;
      const bgX = -((index * SPEED) % canvas.width);

      let bgOne = {
        x: bgX + canvas.width,
        y: 244,
        w: canvas.width,
        h: 226,
      };

      let bgTwo = {
        x: bgX,
        y: 244,
        w: canvas.width,
        h: 226,
      };
      context.drawImage(
        sprite,
        this.bg.spriteX,
        this.bg.spriteY,
        this.bg.spriteW,
        this.bg.spriteH,
        bgOne.x,
        bgOne.y,
        bgOne.w,
        bgOne.h
      );
      context.drawImage(
        sprite,
        this.bg.spriteX,
        this.bg.spriteY,
        this.bg.spriteW,
        this.bg.spriteH,
        bgTwo.x,
        bgTwo.y,
        bgTwo.w,
        bgTwo.h
      );
    } else {
      context.drawImage(
        sprite,
        this.bg.spriteX,
        this.bg.spriteY,
        this.bg.spriteW,
        this.bg.spriteH,
        0,
        226,
        canvas.width,
        this.bg.spriteH
      );
    }
  }
}

// фон с землёй
class Foreground {
  constructor() {
    this.fg = {
      spriteX: 277,
      spriteY: 0,
      spriteW: 222,
      spriteH: 109,
      x: 0,
      y: 420,
      w: canvas.width,
      h: 80,
    };
  }

  //рисуем
  drawEngine() {
    context.drawImage(
      sprite,
      this.fg.spriteX,
      this.fg.spriteY,
      this.fg.spriteW,
      this.fg.spriteH,
      this.fg.x,
      this.fg.y,
      this.fg.w,
      this.fg.h
    );
  }
}
