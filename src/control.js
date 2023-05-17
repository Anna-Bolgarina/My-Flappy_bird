canvas.addEventListener("click", (event) => {
  //определяем координаты клика
  const { left, top } = canvas.getBoundingClientRect();
  const clickX = event.clientX - left;
  const clickY = event.clientY - top;

  /*если игра в стадии готовности -присваиваем статус игра, если игра идет -управляем птичкой, если игра закончена -обрабатываем клик на start и обновляем игру*/

  if (state.current === state.gReady) {
    state.current = state.game;
    SWOOSH.play();
  } else if (state.current === state.game) {
    event.preventDefault();
    bird.clickBird();
  } else if (state.current === state.gOver && clickStart(clickX, clickY)) {
    resetGame();
  }
});

// управление птичкой пробелом
document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    event.preventDefault();
    bird.clickBird();
  }
});

// функция нажатия кнопки start
function clickStart(clickX, clickY) {
  const { x, y, w, h } = buttonStart;
  return clickX > x && clickX < x + w && clickY > y && clickY < y + h;
}

// координаты кнопки start
const buttonStart = {
  x: 172,
  y: 270,
  w: 82,
  h: 30,
};
