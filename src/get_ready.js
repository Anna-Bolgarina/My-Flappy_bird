class getReady {
  constructor() {
    this.img = {
      spriteX: 0,
      spriteY: 229,
      width: 172,
      height: 161,
      x: 114,
      y: 100,
    };
  }
  
//рисуем
  drawEngine() {
    if (state.current === state.gReady) {
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
    }
  }
}
