const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearButton = document.getElementById('clear');
const filter = document.querySelector('.filter');
const filterText = document.getElementById('filter');
const formBtn = itemForm.querySelector('button');
let isEditMode = false;

function displayItems() {
  const itemsFromStorage = getItemsFromStorage();
  itemsFromStorage.forEach((item) => {
    addItemToDOM(item);
  });
  resetUI();
}

const onAddItemSubmit = (e) => {
  e.preventDefault();

  const newItem = itemInput.value.trim();

  {
    // Validate input
    if (newItem == '') {
      alert('Please add an item');
      return;
    }

    // Check for Edit Mode
    if (isEditMode) {
      const itemToEdit = itemList.querySelector('.edit-mode');
      removeItemFromStorage(itemToEdit.textContent);
      // itemToEdit.classList.remove('edit-mode');
      // itemToEdit.remove();
      itemToEdit.textContent = newItem;
      itemToEdit.append(createButton('remove-item btn-link text-red'));
      addItemToStorage(newItem);
      setToStable(itemToEdit);
    } else if (checkIfItemExists(newItem)) {
      alert('Item already added to list');
    } else {
      // Create item DOM element
      addItemToDOM(newItem);
      // Add item to local storage
      addItemToStorage(newItem);
    }

    resetUI();
    filterItems();
  }
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
  if (e.target.closest('button')) {
    deleteItem(e.target.parentElement.parentElement);
    // deleteItem(e.target.closest('li'));
  } else if (e.target.classList.contains('edit-mode')) {
    setToStable(e.target);
  } else if (e.target.closest('li')) {
    setItemToEdit(e.target);
  }
};

// Prevent Duplicates
function checkIfItemExists(item) {
  const itemsFromStorage = getItemsFromStorage();
  return (
    itemsFromStorage
      // .map() through array and output it all as lowercase so can be compared to capitalised version of same word
      .map((i) => i.toLowerCase())
      .includes(item.toLowerCase())
  );
}

// Edit Mode
function setItemToEdit(item) {
  isEditMode = true;

  itemList
    .querySelectorAll('li')
    .forEach((i) => i.classList.remove('edit-mode'));

  item.classList.add('edit-mode');
  formBtn.innerHTML = '<i class="fa-solid fa-pen"></i> Update Item';
  formBtn.style.backgroundColor = '#228b22';
  itemInput.value = item.textContent;
}

// Stable Mode
function setToStable(item) {
  item.classList.remove('edit-mode');
  formBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Add Item';
  formBtn.style.backgroundColor = '';
  itemInput.value = '';
}

// Delete item
const deleteItem = (item) => {
  // Remove from DOM
  item.remove();
  // Remove from storage
  removeItemFromStorage(item.textContent);
  resetUI();
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
  } else {
    const itemInEdit = itemList.querySelector('.edit-mode');
    itemInEdit.classList.remove('edit-mode');
  }

  resetUI();
};

// Creating node list of LIs and checking against length of list
const resetUI = () => {
  itemInput.value = '';
  const items = itemList.querySelectorAll('li');
  if (items.length === 0) {
    clearButton.style.display = 'none';
    filter.style.display = 'none';
  } else {
    clearButton.style.display = 'block';
    filter.style.display = 'block';
  }

  formBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Add Item';
  formBtn.style.backgroundColor = '';

  isEditMode = false;
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
  displayItems();
  resetUI();
  filterText.value = '';
}

init();
