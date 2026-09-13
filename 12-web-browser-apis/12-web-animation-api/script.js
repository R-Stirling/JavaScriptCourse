const ball = document.getElementById('ball');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const reverse = document.getElementById('reverse');
const speedUP = document.getElementById('speed-up');
const speedDown = document.getElementById('slow-down');
let currentSpeed = document.getElementById('current-speed');

// Create array of animations
const rollAnimation = [
  { transform: 'rotate(0) translate3D(-50%, -50%, 0)', color: 'white' },
  { color: 'blue', offset: 0.3 },
  { transform: 'rotate(360deg) translate3D(-50%, -50%, 0)', color: 'white' },
];

const rollOptions = {
  duration: 3000,
  iterations: Infinity,
};

const roll = ball.animate(rollAnimation, rollOptions);
currentSpeed.textContent = roll.playbackRate;

// Event listeners
play.addEventListener('click', () => {
  roll.playbackRate = 1;
  roll.play();
  currentSpeed.textContent = roll.playbackRate;
});
pause.addEventListener('click', () => {
  roll.pause();
  currentSpeed.textContent = '0';
});
reverse.addEventListener('click', () => {
  roll.reverse();
  currentSpeed.textContent = roll.playbackRate;
});
speedUP.addEventListener('click', () => {
  roll.playbackRate = roll.playbackRate * 2;
  currentSpeed.textContent = roll.playbackRate;
});
speedDown.addEventListener('click', () => {
  roll.playbackRate = roll.playbackRate / 2;
  currentSpeed.textContent = roll.playbackRate;
});
