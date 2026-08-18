// const form = document.getElementById('item-form');

// function onSubmit(e) {
//   // Prevent submitting to browser
//   e.preventDefault();

//   const item = document.getElementById('item-input').value;
//   const priority = document.getElementById('priority-input').value;

//   //   Form validation:
//   if (item === '' || priority === '0') {
//     alert('Please fill in all fields');
//     return;
//   }

//   console.log(item, priority);
// }

// // FormData() to return the form data
// function onSubmit2(e) {
//   e.preventDefault();

//   const formData = new FormData(form);

//   //   const item = formData.get('item');
//   //   const priority = formData.get('priority');

//   //   .entries() - another method for returning an array of entries. Can then use index to pull value
//   const entries = formData.entries();

//   for (let entry of entries) {
//     console.log(entry[1]);
//   }

//   //   console.log(entries);
// }

// form.addEventListener('submit', onSubmit2);

// Build new item in list from form entry

const form = document.getElementById('item-form');
const items = document.getElementById('item-list');
const item = document.getElementById('item-input');
const priority = document.getElementById('priority-input');

function addItem(e) {
  e.preventDefault();

  if (item.value === '' || priority.value === '0') {
    alert('Please fill in all fields');
    return;
  }

  const li = document.createElement('li');

  const button = document.createElement('button');
  button.className = 'remove-item btn-link text-red';
  button.type = 'button';
  button.setAttribute('aria-label', 'Remove item');

  const i = document.createElement('i');
  i.className = 'fa-solid fa-xmark';

  const newText = document.createTextNode(item.value);

  li.append(newText);
  li.append(button);
  button.append(i);

  if (priority === '1') {
    items.prepend(li);
  } else if (priority === '2') {
    const middle = Math.floor(items.children.length / 2);
    items.insertBefore(li, items.children[middle - 1] ?? null);
  } else {
    items.appendChild(li);
  }

  item.value = '';
  priority.value = '0';
  //   item.focus();
}

form.addEventListener('submit', addItem);

items.addEventListener('click', (e) => {
  const removeBtn = e.target.closest('.remove-item');
  if (removeBtn) {
    removeBtn.closest('li').remove();
  }
});
