const body = document.querySelector('body');
const ball = document.querySelector('.ball');
const camp = document.querySelector('.camp');

const canvas = document.getElementById('canvas1');
const context = canvas.getContext('2d');
const canvas_width = canvas.width = 40;
const canvas_height = canvas.height = 40;
const playerImage = new Image();
playerImage.src = 'resources/mario-spritesheet.png';
const spriteWidth = 40;
const spriteHeight = 40;
let frameX = 0;
let frameY = 0;
let frameLimit = 0;

let gameFrame = 0;
const staggerFrames = 10;

function animate() {
    let kick = true;
  camp.addEventListener('click', () => {
    gameFrame = 0;
  if (kick === true) {
    frameY = 1;
    frameLimit = 1;
    }
  })
  if (gameFrame > 15) {
  frameY = 0;
    kick = false;
    frameLimit = 2;
  }
  if (gameFrame > 80) {
    frameLimit = 1;
  }
  context.clearRect(0, 0, canvas_width, canvas_height);
  let position = Math.floor(gameFrame/staggerFrames) % frameLimit;
  frameX = spriteWidth * position;
  console.log(gameFrame);
  console.log(frameY);
  // context.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
  context.drawImage(playerImage, frameX, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, canvas_width, canvas_height);

  gameFrame++;
  requestAnimationFrame(animate);
}

  animate();

camp.addEventListener('click', () => {
  let campCoords = event.currentTarget.getBoundingClientRect();

  let ballCoords = {
    top: event.clientY - campCoords.top - camp.clientTop - ball.clientHeight / 2,
    left: event.clientX - campCoords.left - camp.clientLeft - ball.clientWidth / 2
  }
  //top
  if (ballCoords.top < 0) {
    ballCoords.top = 0;
  }
  //left
  if (ballCoords.left < 0) {
    ballCoords.left = 0;
  }
  //right
  if (ballCoords.left > camp.clientWidth - camp.clientLeft - ball.clientWidth) {
    ballCoords.left = camp.clientWidth - ball.clientWidth;
  }
  //bottom
  if (ballCoords.top > camp.clientHeight - camp.clientTop - ball.clientHeight) {
    ballCoords.top = camp.clientHeight - ball.clientHeight;
  }

  ball.style.left = ballCoords.left + 'px';
  ball.style.top = ballCoords.top + 'px';

  //canvas positioning

  canvas.style.left = ballCoords.left - 36 + 'px';
  canvas.style.top = ballCoords.top - 15 + 'px';
  
});
