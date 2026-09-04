const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

// Song titles
const songs = ['hey', 'summer', 'ukulele'];

// Keep track of songs
let songIndex = 2;

// Initially load song details
const loadSong = (song) => {
  title.innerText = `${song}`;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${song}.jpg`;
};

const playSong = () => {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');
  audio.play();
};

const pauseSong = () => {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');
  audio.pause();
};

playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

const prevSong = () => {
  songIndex === 0 ? (songIndex = songs.length - 1) : songIndex--;
  loadSong(songs[songIndex]);
  playSong();
};

const nextSong = () => {
  songIndex === songs.length - 1 ? (songIndex = 0) : songIndex++;
  loadSong(songs[songIndex]);
  playSong();
};

const updateProgress = (e) => {
  const { duration, currentTime } = e.srcElement;
  const progressPerecent = (currentTime / duration) * 100;
  progress.style.width = `${progressPerecent}%`;
};

const setProgress = (e) => {
  const width = e.target.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = 10;
  audio.currentTime = (clickX / width) * duration;
};

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
audio.addEventListener('timeupdate', updateProgress);
progressContainer.addEventListener('click', setProgress);
