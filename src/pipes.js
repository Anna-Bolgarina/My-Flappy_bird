class Pipes {
  constructor() {
    this.pipesPosition = [];

    this.top = {
      spriteX: 555,
      spriteY: 0,
    };

    this.bottom = {
      spriteX: 502,
      spriteY: 0,
    };

    this.w = 50;
    this.h = 400;

    this.maxYPos = -140;
    this.gap = 100; //промежуток между трубами 25% высоты трубы
    this.interval = this.w * 3.3; //интервал между труб сделала чуть больше чем 3

    this.scored = false;
  }

  //рисуем тубы
  drawEngine() {
    this.pipesPosition.forEach((pos) => {
      const topYPos = pos.y;
      const bottomYPos = pos.y + this.h + this.gap;

      // верхняя
      context.drawImage(
        sprite,
        this.top.spriteX,
        this.top.spriteY,
        this.w,
        this.h,
        pos.x,
        topYPos,
        this.w,
        this.h
      );
      // нижняя
      context.drawImage(
        sprite,
        this.bottom.spriteX,
        this.bottom.spriteY,
        this.w,
        this.h,
        pos.x,
        bottomYPos,
        this.w,
        this.h
      );
    });
  }

  //новые трубы
  update() {
    if (state.current != state.game) {
      return;
    }
    if (
      this.pipesPosition.length === 0 ||
      canvas.width - this.pipesPosition[this.pipesPosition.length - 1].x >=
        this.interval
    ) {
      this.pipesPosition.push({
        x: canvas.width,
        y: this.maxYPos * (Math.random() + 1),
        scored: false,
      });
    }
    this.contact(bird);
    this.pipesPosition.forEach((pos) => {
      const bottomContactYPos = pos.y + this.h + this.gap;
      pos.x -= SPEED;
      this.pipePassed(pos);
    });
  }

// проверяем прошла ли птичка середину трубы,увеличиваем счет если да
  pipePassed(pipe) {
    const middlePipe = pipe.x + this.w / 2;
    if (middlePipe < bird.x && !pipe.scored) {
      if (pipe.x < -this.w) {
        this.pipesPosition.shift();
      }
      score.currentScore += 1;
      POINT.play();
      pipe.scored = true;

      // сохраняем счет
      score.bestScore = Math.max(score.currentScore, score.bestScore);
      localStorage.setItem("bestScore", score.bestScore);

      // увеличиваем немного скорость каждые 10 очков
      if (score.currentScore % 10 === 0) {
        SPEED += 0.1;
      }
    }
  }

//если птичка столкнулась с трубой, игра окончена
  contact() {
    this.pipesPosition.forEach((pos) => {
      const bottomContactYPos = pos.y + this.h + this.gap;
      if (
        (bird.x + bird.radius > pos.x &&
          bird.x - bird.radius < pos.x + this.w &&
          bird.y + bird.radius > pos.y &&
          bird.y - bird.radius < pos.y + this.h) ||
        (bird.x + bird.radius > pos.x &&
          bird.x - bird.radius < pos.x + this.w &&
          bird.y + bird.radius > bottomContactYPos &&
          bird.y - bird.radius < bottomContactYPos + this.h)
      ) {
        state.current = state.gOver;
        HIT.play();
      }
    });
  }
  
//обновляем
  reset() {
    this.pipesPosition = [];
  }
}
