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

function displayItems() {
  const itemsFromStorage = getItemsFromStorage();
  itemsFromStorage.forEach((item) => {
    addItemToDOM(item);
    showHideFilterClear2();
  });
}

const onAddItemSubmit = (e) => {
  e.preventDefault();

  const newItem = itemInput.value;

  // Validate input
  if (newItem == '') {
    alert('Please add an item');
    return;
  }

  // Create item DOM element
  addItemToDOM(newItem);
  // Add item to local storage
  addItemToStorage(newItem);

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

// Separate function to add item to DOM
const addItemToDOM = (item) => {
  //   Create list item
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));
  const button = createButton('remove-item btn-link text-red');
  li.appendChild(button);

  //   Add to DOM
  itemList.appendChild(li);
};

// function to add new item to storage
const addItemToStorage = (item) => {
  const itemsFromStorage = getItemsFromStorage();

  // Add new item to array
  itemsFromStorage.push(item);

  // Convert to JSON string and set to local storage
  localStorage.setItem('items', JSON.stringify(itemsFromStorage));
};

const getItemsFromStorage = () => {
  let itemsFromStorage;
  // If storage is empty, set to empty array
  if (localStorage.getItem('items') === null) {
    itemsFromStorage = [];
  } else {
    // if items in storage, parse JSON string of items into array.
    itemsFromStorage = JSON.parse(localStorage.getItem('items'));
  }

  return itemsFromStorage;
};

const onClickItem = (e) => {
  // check against parent element for button class
  if (e.target.parentElement.classList.contains('remove-item')) {
    // deleteItem(e.target.parentElement.parentElement);
    deleteItem(e.target.closest('li'));
  }
};

// Delete item
const deleteItem = (item) => {
  // Remove from DOM
  item.remove();
  // Remove from storage
  removeItemFromStorage(item.textContent);
  showHideFilterClear2();
};

const removeItemFromStorage = (item) => {
  let itemsFromStorage = getItemsFromStorage();

  // Filter out item to be removed
  itemsFromStorage = itemsFromStorage.filter((i) => i !== item);

  // Reset to localstorage
  localStorage.setItem('items', JSON.stringify(itemsFromStorage));
};

const clearItems = (e) => {
  if (confirm('Are you sure?')) {
    while (itemList.firstChild) {
      itemList.removeChild(itemList.firstChild);
    }
    // Clear from localStorage
    localStorage.removeItem('items');
  }

  showHideFilterClear2();
};

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

// Filter items - removed event object from function so it can be called from onAddItemSubmit() - keeps filter applied when item added.
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

// Initialise app - to not have event listeners in global scope (optional)
function init() {
  // Event Listeners
  itemForm.addEventListener('submit', onAddItemSubmit);
  itemList.addEventListener('click', onClickItem);
  clearButton.addEventListener('click', clearItems);
  filter.addEventListener('input', filterItems);
  document.addEventListener('DOMContentLoaded', displayItems);
  showHideFilterClear2();
  filterText.value = '';
}

init();
