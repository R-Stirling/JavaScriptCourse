function createNewItem(item) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));

  const button = document.createElement('button');
  button.className = 'remove-item btn-link text-red';

  const icon = document.createElement('i');
  icon.className = 'fa-solid fa-xmark';

  button.appendChild(icon);
  li.appendChild(button);

  document.querySelector('.items').appendChild(li);
}

createNewItem('Cheese');

// Build same as separate functions for each element

function newItem(item) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));
  li.appendChild(newButton());
  document.querySelector('.items').appendChild(li);
}

function newButton() {
  const button = document.createElement('button');
  button.className = 'remove-item btn-link text-red';
  button.appendChild(newIcon());
  return button;
}

function newIcon() {
  const icon = document.createElement('i');
  icon.className = 'fa-solid fa-xmark';
  return icon;
}

newItem('Mince');

// Functions but passing in classes.
function createNewItem(item) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));

  const button = createButton('remove-item btn-link text-red');

  li.appendChild(button);

  document.querySelector('.items').appendChild(li);
}

function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;

  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);

  return button;
}

function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}

createNewItem('Sauce');
