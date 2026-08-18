const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');
const heading = document.querySelector('h1');

// e.traget.value to return the full value in the target
function onInput(e) {
  heading.textContent = e.target.value;
}

// .checked for checkboxes - returns boolean
function onChecked(e) {
  const isChecked = e.target.checked;
  heading.textContent = isChecked ? 'Checked' : 'Not checked';
}

// When target is click/focused
function onFocus() {
  itemInput.style.outline = '2px solid black';
}

// When target is clicked off of/blur
function onBlur() {
  itemInput.style.outline = '';
}

itemInput.addEventListener('input', onInput);
priorityInput.addEventListener('input', onInput);
checkbox.addEventListener('input', onChecked);
itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);
