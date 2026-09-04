const video = document.querySelector('video');
const play = document.querySelector('#play');
const pause = document.querySelector('#pause');
const stop = document.querySelector('#stop');
const currentTime = document.querySelector('#current-time');

play.addEventListener('click', () => {
  video.play();
});
pause.addEventListener('click', () => video.pause());
stop.addEventListener('click', () => {
  video.pause();
  video.currentTime = 0;
});

video.addEventListener('timeupdate', () => {
  currentTime.innerText = video.currentTime.toFixed(0);
});
