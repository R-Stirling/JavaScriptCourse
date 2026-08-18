const div = document.createElement('div');
div.className = 'my-element';
div.id = 'my-element';
div.setAttribute('title', 'My Element');

// div.innerText = "I'm a div";

const text = document.createTextNode('Hello World');
div.appendChild(text);

// appendChild of element to add new element as the last child or parent
// document.querySelector('ul').appendChild(div);

console.log(div, div.innerHTML);

const newItem = document.createElement('li');
newItem.innerHTML = `Bananas <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>`;

document.querySelector('ul').appendChild(newItem);

console.log(newItem, newItem.innerHTML);
