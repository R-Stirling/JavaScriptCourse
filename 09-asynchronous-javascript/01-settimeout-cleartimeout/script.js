// Callback gets put onto task queue and waits from call stack to clear to run
// Can use anonymous or named function:
// setTimeout(changeText, 2000);

// This is put on global scope/call stack and will run first, even when callback timeout set to 0
console.log('Hello from global scope');

function changeText() {
  document.querySelector('h1').textContent = 'Hello from callback';
}
// setTimeout() can be assigned to a variable and still be executed
const timerId = setTimeout(changeText, 3000);

// Cancel timeout
document.querySelector('#cancel').addEventListener('click', () => {
  // timerId (and all timers/intervals) will be assigned a unique integer by the browser for handling
  console.log(timerId);
  clearTimeout(timerId);
  console.log('Timer cancelled');
});
