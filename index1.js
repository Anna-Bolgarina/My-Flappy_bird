// создаём объекты на основе классов
const score = new Score();
const get_ready = new getReady();
const game_over = new gameOver();
const bg = new Background();
const fg = new Foreground();
const bird = new Bird();
const pipes = new Pipes();

// отрисовка всех элементов
function drawEngine() {
  context.fillStyle = "#25a1da";
  context.fillRect(0, 0, canvas.width, canvas.height);

  bg.drawEngine();
  pipes.drawEngine();
  fg.drawEngine();
  bird.drawEngine();
  get_ready.drawEngine();
  game_over.drawEngine();
  score.drawEngine();
}

// обновляем игру
function resetGame() {
  pipes.reset();
  bird.speedReset();
  score.reset();
  bg.drawEngine();
  
  state.current = state.gReady;
}

// запуск игры
function loop() {
  let currentTime = performance.now();
  let elapsed = currentTime - lastFrameTime;
  if (elapsed < frameDelay) {
    setTimeout(loop, frameDelay - elapsed);
    return;
  }

  lastFrameTime = currentTime;
  
  pipes.update();
  bird.update();
  drawEngine();
  frames++;
  
  requestAnimationFrame(loop);
}

let lastFrameTime = performance.now();
score.bestScore = 0;
loop();
