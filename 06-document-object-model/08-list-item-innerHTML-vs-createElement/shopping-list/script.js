// Quick and dirty
function createListIem(item) {
  const li = document.createElement('li');
  li.innerHTML = `Eggs
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>`;
  document.querySelector('.items').appendChild(li);
}

createListIem('Eggs');

// Clean & Performant
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

  //   console.log(li.innerHTML);
}

createNewItem('Cheese');
