const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearButton = document.getElementById('clear');
const filter = document.querySelector('.filter');
const filterText = document.getElementById('filter');
// Adding a style via JS to apply hidden to elements
const style = document.createElement('style');
style.textContent = `.hidden {
  display: none;}`;
document.head.appendChild(style);

// Reset filter text on page load/reload
filterText.value = '';

const addItem = (e) => {
  e.preventDefault();

  const newItem = itemInput.value;

  // Validate input
  if (itemInput.value == '') {
    alert('Please add an item');
    return;
  }

  //   Create list item
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(newItem));
  const button = createButton('remove-item btn-link text-red');
  li.appendChild(button);

  //   Add to DOM
  itemList.appendChild(li);

  showHideFilterClear2();
  filterItems();
  itemInput.value = '';
};

// Create button
const createButton = (classes) => {
  const button = document.createElement('button');
  button.className = classes;
  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);
  return button;
};

// Create icon
const createIcon = (classes) => {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
};

// Delete item
const deleteItem = (e) => {
  const deleteButton = e.target.closest('i' || 'button');
  if (deleteButton) {
    deleteButton.closest('li').remove();
  }
  showHideFilterClear2();
};

// Clear all items
// const clearItems = (e) => {
//   itemList.innerHTML = '';
//   showHideFilterClear();
// };

const clearItems = (e) => {
  if (confirm('Are you sure?')) {
    while (itemList.firstChild) {
      itemList.removeChild(itemList.firstChild);
    }
  }
  showHideFilterClear2();
};

// const deleteItem = (e) => {
//   if (e.target.parentElement.classList.contains('remove-item')) {
//     e.target.parentElement.parentElement.remove();
//   }
// };

// Hide Filter and Clear All when no items
// Using new style defined and added to DOM
const showHideFilterClear = () => {
  if (!itemList.firstElementChild) {
    filter.className = 'hidden';
    clearButton.className = 'hidden';
  } else {
    filter.className = 'filter';
    clearButton.className = 'btn-clear';
  }
};

// Creating node list of LIs and checking against length of list
const showHideFilterClear2 = () => {
  const items = itemList.querySelectorAll('li');
  if (items.length === 0) {
    clearButton.style.display = 'none';
    filter.style.display = 'none';
  } else {
    clearButton.style.display = 'block';
    filter.style.display = 'block';
  }
};

// Filter items - removed event object from function so it can be called from addItem() - keeps filter applied when item added.
const filterItems = () => {
  const text = filterText.value.toLowerCase();
  const items = itemList.querySelectorAll('li');

  items.forEach((item) => {
    if (!item.textContent.toLowerCase().includes(text)) {
      item.style.display = 'none';
    } else {
      item.style.display = 'flex';
    }
  });
};

// Event Listeners
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', deleteItem);
clearButton.addEventListener('click', clearItems);
filter.addEventListener('input', filterItems);
