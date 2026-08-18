const itemInput = document.getElementById('item-input');

const onKeyPress = (e) => {
  console.log('Key press');
};

const onKeyUp = (e) => {
  console.log('Key up');
};

// keydown registers held down as multiple - keypress only registers once
const onKeyDown = (e) => {
  console.log('Key dowm');
};

// key - get value of key pressed (respects shift/capslock)

// const keyPressed = (e) => {
//   if (e.key === 'r') {
//     console.log('You pressed r');
//   } else console.log(e.key)};

const keyPressed = (e) => {
  if (e.key === 'r') {
    setTimeout(() => {
      alert('You pressed r');
    }, 500);
  } else console.log(e.key);
};

const replaceTitle = (e) => {
  const h1 = document.querySelector('h1');
  h1.innerText += e.key;
};

// keyCode - each key has unique code (deprecated)
const sPressed = (e) => {
  if (e.keyCode === 83) {
    alert('You pressed s');
  }
};

// .code - the physical key pressed (ignores Shift/layout)
const showKey = (e) => {
  console.log('key:', e.key);
  console.log('code:', e.code);
  console.log('keyCode:', e.keyCode);
};

// .repeat - tests if keydown is held
const keyHeld = (e) => {
  if (e.repeat) {
    console.log('You are holding down ' + e.key);
  }

  //   Test if shift, ctrl or alt pressed
  console.log('Shift: ' + e.shiftKey);
  console.log('Ctrl: ' + e.ctrlKey);
  console.log('Alt: ' + e.altKey);
};

// itemInput.addEventListener('keypress', onKeyPress);
// itemInput.addEventListener('keyup', onKeyUp);
// itemInput.addEventListener('keydown', onKeyDown);
// itemInput.addEventListener('keypress', keyPressed);
// itemInput.addEventListener('keydown', replaceTitle);
// itemInput.addEventListener('keydown', sPressed);
// itemInput.addEventListener('keydown', showKey);
itemInput.addEventListener('keydown', keyHeld);
