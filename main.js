const ball = document.querySelector('.ball');
const camp = document.querySelector('.camp');
const body = document.querySelector('body');

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
});
