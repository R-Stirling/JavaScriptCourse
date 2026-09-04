const controls = document.querySelector('.controls');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const video = document.getElementById('video');
const progressBar = document.getElementById('progress');
const timeStamp = document.getElementById('timestamp');

// Create Pause Button and Remove Play
function playPause() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Stop video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

// Format time to 00:00
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Update progbar and timestamp value
function updateProgress() {
  progressBar.value = (video.currentTime / video.duration) * 100;
  timeStamp.innerText = formatTime(video.currentTime);
}

// Update time via Progbar
function progBarDrag() {
  video.currentTime = (progressBar.value * video.duration) / 100;
}

// Update icon
function updateIcon() {
  if (video.paused) {
    play.innerHTML = `<i class="fa fa-play fa-2x"></i>`;
  } else {
    play.innerHTML = `
        <i class="fa fa-pause fa-2x"></i>`;
  }
}

// Event Listeners

video.addEventListener('click', playPause);
video.addEventListener('timeupdate', updateProgress);
video.addEventListener('pause', updateIcon);
video.addEventListener('play', updateIcon);
play.addEventListener('click', playPause);
stop.addEventListener('click', stopVideo);
progressBar.addEventListener('click', progBarDrag);
