const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreElement = document.getElementById('score');
const highScoreElement = document.getElementById('high-score');
const difficultySelect = document.getElementById('difficulty');

const box = 20;
let score = 0;
let highScore = localStorage.getItem('highScore') || 0;
highScoreElement.textContent = 'High Score: ' + highScore;

let snake = [];
snake[0] = { x: 9 * box, y: 10 * box };

let food = {
  x: Math.floor(Math.random() * 19 + 1) * box,
  y: Math.floor(Math.random() * 19 + 1) * box
};

let d;
let nextDirection;
let game;
let isPaused = false;
let gameSpeed = 100;

document.addEventListener('keydown', direction);

function direction(event) {
  if (event.keyCode == 37 && d != 'RIGHT') {
    nextDirection = 'LEFT';
  } else if (event.keyCode == 38 && d != 'DOWN') {
    nextDirection = 'UP';
  } else if (event.keyCode == 39 && d != 'LEFT') {
    nextDirection = 'RIGHT';
  } else if (event.keyCode == 40 && d != 'UP') {
    nextDirection = 'DOWN';
  }
}

function collision(newHead, snake) {
  for (let i = 0; i < snake.length; i++) {
    if (newHead.x == snake[i].x && newHead.y == snake[i].y) {
      return true;
    }
  }
  return false;
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = (i == 0) ? 'green' : 'white';
    ctx.strokeStyle = 'red';
    ctx.fillRect(snake[i].x, snake[i].y, box, box);
    ctx.strokeRect(snake[i].x, snake[i].y, box, box);
  }

  ctx.fillStyle = 'red';
  ctx.fillRect(food.x, food.y, box, box);

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  // Yönü güncelle
  if (nextDirection) {
    d = nextDirection;
    nextDirection = null;
  }

  if (d == 'LEFT') snakeX -= box;
  if (d == 'UP') snakeY -= box;
  if (d == 'RIGHT') snakeX += box;
  if (d == 'DOWN') snakeY += box;

  if (snakeX == food.x && snakeY == food.y) {
    score++;
    scoreElement.textContent = 'Score: ' + score;
    food = {
      x: Math.floor(Math.random() * 19 + 1) * box,
      y: Math.floor(Math.random() * 19 + 1) * box
    };
  } else {
    snake.pop();
  }

  let newHead = {
    x: snakeX,
    y: snakeY
  };

  if (snakeX < 0 || snakeY < 0 || snakeX >= canvas.width || snakeY >= canvas.height || collision(newHead, snake)) {
    clearInterval(game);
    if (score > highScore) {
      highScore = score;
      localStorage.setItem('highScore', highScore);
      highScoreElement.textContent = 'High Score: ' + highScore;
    }
  }

  snake.unshift(newHead);
}

function startGame() {
  if (!game) {
    setGameSpeed();
    game = setInterval(draw, gameSpeed);
    changeBackgroundColor();
  }
  isPaused = false;
}

function pauseGame() {
  if (game) {
    clearInterval(game);
    game = null;
    isPaused = true;
  }
}

function restartGame() {
  clearInterval(game);
  game = null;
  score = 0;
  scoreElement.textContent = 'Score: ' + score;
  snake = [];
  snake[0] = { x: 9 * box, y: 10 * box };
  d = null;
  nextDirection = null;
  food = {
    x: Math.floor(Math.random() * 19 + 1) * box,
    y: Math.floor(Math.random() * 19 + 1) * box
  };
  startGame();
}

function setGameSpeed() {
  const difficulty = difficultySelect.value;
  if (difficulty === 'easy') {
    gameSpeed = 150;
  } else if (difficulty === 'medium') {
    gameSpeed = 100;
  } else if (difficulty === 'hard') {
    gameSpeed = 50;
  }
}

function changeBackgroundColor() {
  const colors = ['#f0f0f0', '#e0f7fa', '#ffeb3b', '#c8e6c9', '#ffccbc'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}