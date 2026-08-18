const button = document.querySelector('form button');

const div = document.querySelector('form div:nth-child(2');

const form = document.querySelector('form');

button.addEventListener('click', (e) => {
  alert('Button clicked');
  //   .stopPropogation() prevents bubbling up
  e.stopPropagation();
});

div.addEventListener('click', () => {
  alert('div was clicked');
});

form.addEventListener('click', () => {
  alert('form was clicked');
});

// Event listeners 'bubble up' from target element to parent/ancestor. Here, click on the button and button event runs, then div (parent) event runs, then form event runs.
