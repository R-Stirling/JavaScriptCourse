// const intervalID = setInterval(myCallback, 1000, 'Hello');

// function myCallback(a) {
//   console.log(a, Date.now());
// }

let intervalID;
const heading = document.querySelector('h1');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');

function startChange() {
  if (!intervalID) {
    intervalID = setInterval(changeRandomColor, 1000);
  }
}

function stopChange() {
  clearInterval(intervalID);
  intervalID = '';
}

function changeColor() {
  if (document.body.style.backgroundColor !== 'black') {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    heading.textContent = 'Black';
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    heading.textContent = 'White';
  }
}

function changeRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = `#${randomColor}`;
  document.body.style.color = `#${randomColor2}`;
  heading.textContent = 'So random';
}

startButton.addEventListener('click', startChange);
stopButton.addEventListener('click', stopChange);
