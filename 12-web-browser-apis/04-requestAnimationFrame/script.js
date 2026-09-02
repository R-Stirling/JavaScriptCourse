// const image = document.querySelector('img');
// let start;
// let done = false;

// function step(timestamp) {
//   if (start === undefined) {
//     start = timestamp;
//   }
//   const elapsed = timestamp - start;

//   if (elapsed > 4000) {
//     done = true;
//   }

//   if (done) {
//     return;
//   }

//   image.style.transform = `translateX(${elapsed / 10}px) translateY(${elapsed / 10}px) rotate(${elapsed / 2}deg)`;

//   requestAnimationFrame(step);
// }

const image = document.querySelector('img');
let start;
let done = false;
let endX = 0;
let endY = 0;
let endRotate = 0;

function step(timestamp) {
  if (start === undefined) {
    start = timestamp;
  }
  const elapsed = timestamp - start;

  if (elapsed > 2000) {
    done = true;
  }

  if (done) {
    // capture exactly where step left off
    endX = elapsed / 10;
    endY = elapsed / 10;
    endRotate = elapsed / 2;

    start = undefined;
    requestAnimationFrame(step2);
    return;
  }

  image.style.transform = `translateX(${elapsed / 10}px) translateY(${elapsed / 10}px) rotate(${elapsed / 2}deg)`;
  requestAnimationFrame(step);
}

function step2(timestamp) {
  if (start === undefined) {
    start = timestamp;
  }
  const elapsed = timestamp - start;

  if (elapsed > 2000) {
    return;
  }

  // start from step's ending values, then subtract step2's own progress
  const x = endX - elapsed / 10;
  const y = endY - elapsed / 10;
  const rotate = endRotate - elapsed / 2;

  image.style.transform = `translateX(${x}px) translateY(${y}px) rotate(${rotate}deg)`;

  requestAnimationFrame(step2);
}

requestAnimationFrame(step);

// requestAnimationFrame(step);
